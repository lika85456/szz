import { YankiConnect } from "yanki-connect";
import chokidar from "chokidar";
import { glob } from "glob";
import path from "path";
import { MapCache } from "./map";
import { CardParser } from "./parser";
import type { Card } from "./parser";
import { Logger } from "./logger";
import readline from "readline";

const DECK_NAME = "SZZ";
const MODEL_NAME = "Basic";
const logger = Logger.getInstance();

async function syncFile(filePath: string, parser: CardParser, mapCache: MapCache, client: YankiConnect) {
    logger.logInfo(`Syncing: ${filePath}`);
    const cards = await parser.parseFile(filePath);
    const deckName = `${DECK_NAME}::${path.basename(filePath, ".md")}`;

    // Ensure deck exists
    const existingDecks = await client.deck.deckNames();
    if (!existingDecks.includes(deckName)) {
        await client.deck.createDeck({ deck: deckName });
        logger.logSuccess(`Created deck: ${deckName}`);
    }

    for (const card of cards) {
        const existingCard = mapCache.get(card.id);

        if (existingCard) {
            if (existingCard.contentHash === card.contentHash) {
                logger.logUpdate("skip", card.id);
                continue;
            }

            await client.note.updateNote({
                note: {
                    id: existingCard.noteId,
                    fields: {
                        Front: card.front,
                        Back: card.back,
                    },
                },
            });
            mapCache.set(card.id, existingCard.noteId, card.contentHash);
            logger.logUpdate("update", card.id);
        } else {
            const noteId = await client.note.addNote({
                note: {
                    deckName,
                    modelName: MODEL_NAME,
                    fields: {
                        Front: card.front,
                        Back: card.back,
                    },
                },
            });

            if (noteId) {
                mapCache.set(card.id, noteId, card.contentHash);
                logger.logUpdate("add", card.id);
            } else {
                logger.logError(`Failed to add card: ${card.id}`);
            }
        }
    }
}

export async function runSync() {
    const client = new YankiConnect();
    const mapCache = new MapCache();
    const parser = new CardParser(client);

    const files = await glob("anki/**/*.md");
    for (const filePath of files) {
        try {
            await syncFile(filePath, parser, mapCache, client);
        } catch (err) {
            logger.logError(`Error syncing ${filePath}`, err);
        }
    }
    await mapCache.flush();
    await logger.flush();
    logger.logSuccess("Sync complete.");
}

export async function runWatch() {
    const client = new YankiConnect();
    const mapCache = new MapCache();
    const parser = new CardParser(client);

    const watcher = chokidar.watch(["anki", "img"], {
        ignoreInitial: false,
    });

    // First sync all existing files
    const files = await glob("anki/**/*.md");
    for (const filePath of files) {
        try {
            await syncFile(filePath, parser, mapCache, client);
        } catch (err) {
            logger.logError(`Error syncing ${filePath}`, err);
        }
    }

    watcher.on("change", async (filePath) => {
        if (filePath.endsWith(".md")) {
            try {
                await syncFile(filePath, parser, mapCache, client);
            } catch (err) {
                logger.logError(`Error syncing ${filePath}`, err);
            }
        }
    });

    logger.logInfo("Watching for changes... (Press Ctrl+C to exit)");
    process.on("SIGINT", async () => {
        await mapCache.flush();
        await logger.flush();
        logger.logSuccess("Map file saved. Exiting.");
        process.exit(0);
    });
}

function diffCards(current: Card[], cached: Record<string, { noteId: number; contentHash: string }>) {
    const currentMap = new Map(current.map((c) => [c.id, c]));
    const cachedIds = new Set(Object.keys(cached));
    const currentIds = new Set(current.map((c) => c.id));

    const added = [...currentIds].filter((id) => !cachedIds.has(id));
    const removed = [...cachedIds].filter((id) => !currentIds.has(id));
    const changed = [...currentIds].filter(
        (id) =>
            cachedIds.has(id) &&
            cached[id].contentHash !== currentMap.get(id)!.contentHash
    );

    return { added, removed, changed };
}

export async function runDry() {
    const client = new YankiConnect();
    const mapCache = new MapCache();
    const parser = new CardParser(client);

    // Wait for map to load
    await new Promise((resolve) => setTimeout(resolve, 100));

    const files = await glob("anki/**/*.md");
    let allCards: Card[] = [];
    for (const filePath of files) {
        try {
            const cards = await parser.parseFile(filePath);
            allCards = allCards.concat(cards);
        } catch (err) {
            logger.logError(`Error parsing ${filePath}`, err);
        }
    }

    // @ts-ignore: access private map for diff
    const cached = mapCache.map as Record<string, { noteId: number; contentHash: string }>;
    const { added, removed, changed } = diffCards(allCards, cached);

    logger.logInfo("Dry run result:");
    if (added.length) logger.logInfo(`Cards to add: ${added.join(", ")}`);
    if (changed.length) logger.logInfo(`Cards to update: ${changed.join(", ")}`);
    if (removed.length) logger.logInfo(`Cards to remove: ${removed.join(", ")}`);
    if (!added.length && !changed.length && !removed.length)
        logger.logSuccess("No changes detected.");

    // Prompt user
    if (added.length || changed.length || removed.length) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question("Run sync now? (y/N): ", async (answer) => {
            rl.close();
            if (answer.trim().toLowerCase() === "y") {
                await runSync();
            } else {
                logger.logInfo("Sync aborted.");
            }
        });
    }
}

export async function runBackup(path:string, deckName:string) {
    const client = new YankiConnect();

    const result = await client.miscellaneous.exportPackage({
        deck: deckName,
        path,
        includeSched: true
    });

    if (result) {
        logger.logSuccess(`Backup created at ${path}`);
    }
    else {
        logger.logError(`Failed to create backup at ${path}`);
    }
}

export async function runRestore(path:string) {
    const client = new YankiConnect();

    const result = await client.miscellaneous.importPackage({
        path
    });

    if (result) {
        logger.logSuccess(`Restore completed from ${path}`);
    }
    else {
        logger.logError(`Failed to restore from ${path}`);
    }
}