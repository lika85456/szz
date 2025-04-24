import { readFile, writeFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import crypto from 'crypto';
import chokidar from 'chokidar';
import { glob } from 'glob';
import { YankiConnect } from 'yanki-connect';

type Card = {
    id: string;
    front: string;
    back: string;
};

type MapJson = Record<string, number>;

const MAP_PATH = './map.json';
const DECK_NAME = 'SZZ';
const MODEL_NAME = 'Basic';

const client = new YankiConnect();

const readMap = async (): Promise<MapJson> => {
    try {
        const raw = await readFile(MAP_PATH, 'utf8');
        return JSON.parse(raw);
    } catch {
        return {};
    }
};

const writeMap = async (map: MapJson) => {
    await writeFile(MAP_PATH, JSON.stringify(map, null, 2));
};

const hashPath = (p: string): string => {
    return crypto.createHash('sha1').update(p).digest('hex') + path.extname(p);
};

const latexify = (input: string): string => {
    return input
        .replace(/\$\$(.*?)\$\$/gs, (_, expr) => `<anki-mathjax block>${expr}</anki-mathjax>`)
        .replace(/\$(.+?)\$/g, (_, expr) => `<anki-mathjax>${expr}</anki-mathjax>`);
};

const extractImagePaths = (markdown: string): string[] => {
    const regex = /!\[.*?\]\((.*?)\)/g;
    const paths: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = regex.exec(markdown))) {
        paths.push(match[1]);
    }
    return paths;
};

const rewriteImagePaths = (markdown: string, nameMap: Record<string, string>): string => {
    return markdown.replace(/(!\[.*?\]\()(.*?)(\))/g, (_match, p1, p2, p3) => {
        const newName = nameMap[p2];
        return `${p1}${newName}${p3}`;
    });
};

const readImages = async (
    imagePaths: string[],
    baseDir: string,
    seenMedia: Set<string>,
    imageMap: Record<string, Buffer>,
    nameMap: Record<string, string>
): Promise<void> => {
    for (const relPath of imagePaths) {
        const absPath = path.resolve(baseDir, '..', relPath);
        const hashName = hashPath(relPath);
        nameMap[relPath] = hashName;

        if (!seenMedia.has(hashName)) {
            try {
                const buffer = await readFile(absPath);
                imageMap[hashName] = buffer;
                seenMedia.add(hashName);

                await client.media.deleteMediaFile({
                    filename: hashName,
                });

                await client.media.storeMediaFile({
                    filename: hashName,
                    data: buffer.toString('base64'),
                });
            } catch {
                console.warn(`⚠️ Missing image: ${absPath}`);
            }
        }
    }
};

const parseFile = async (
    filePath: string,
    seenMedia: Set<string>,
    imageMap: Record<string, Buffer>
): Promise<Card[]> => {
    const raw = await readFile(filePath, 'utf8');
    const { content } = matter(raw);
    const imagePaths = extractImagePaths(content);
    const nameMap: Record<string, string> = {};

    await readImages(imagePaths, path.dirname(filePath), seenMedia, imageMap, nameMap);
    const contentWithMedia = rewriteImagePaths(content, nameMap);
    const contentWithLatex = latexify(contentWithMedia);

    const lines = contentWithLatex.split('\n');
    const cards: Card[] = [];
    let currentId: string | null = null;
    let front: string[] = [];
    let back: string[] = [];
    let section: 'none' | 'front' | 'back' = 'none';

    for (const line of lines) {
        if (line.startsWith('# ') && !line.startsWith('##')) {
            if (currentId && front.length && back.length) {
                cards.push({
                    id: currentId,
                    front: await marked.parse(front.join('\n')),
                    back: await marked.parse(back.join('\n')),
                });
            }
            currentId = line.replace('# ', '').trim();
            front = [];
            back = [];
            section = 'none';
        } else if (line.startsWith('## front')) {
            section = 'front';
        } else if (line.startsWith('## back')) {
            section = 'back';
        } else {
            if (section === 'front') front.push(line);
            if (section === 'back') back.push(line);
        }
    }

    if (currentId && front.length && back.length) {
        cards.push({
            id: currentId,
            front: await marked.parse(front.join('\n')),
            back: await marked.parse(back.join('\n')),
        });
    }

    return cards;
};

const ensureDeckExists = async () => {
    const existingDecks = await client.deck.deckNames();
    if (!existingDecks.includes(DECK_NAME)) {
        await client.deck.createDeck({ deck: DECK_NAME });
        console.log(`📦 Created deck: ${DECK_NAME}`);
    }
};

const syncFile = async (filePath: string, map: MapJson, seenMedia: Set<string>, imageMap: Record<string, Buffer>) => {
    console.log(`🔄 Syncing: ${filePath}`);
    const cards = await parseFile(filePath, seenMedia, imageMap);

    for (const card of cards) {
        if (map[card.id]) {
            await client.note.updateNote({
                note: {
                    id: map[card.id],
                    fields: {
                        Front: card.front,
                        Back: card.back,
                    },
                },
            });
            console.log(`✏️ Updated: ${card.id}`);
        } else {
            const noteId = await client.note.addNote({
                note: {
                    deckName: DECK_NAME,
                    modelName: MODEL_NAME,
                    fields: {
                        Front: card.front,
                        Back: card.back,
                    },
                },
            });

            if (noteId) {
                map[card.id] = noteId;
                console.log(`✅ Added: ${card.id}`);
            } else {
                console.warn(`⚠️ Failed to add card: ${card.id}`);
            }
        }
    }
};

const watchAndSync = async () => {
    await ensureDeckExists();

    const map = await readMap();
    const seenMedia = new Set<string>();
    const imageMap: Record<string, Buffer> = {};

    const watcher = chokidar.watch(['anki', 'img'], {
        ignoreInitial: false,
    });

    watcher.on('change', async (filePath) => {
        if (filePath.endsWith('.md')) {
            try {
                await syncFile(filePath, map, seenMedia, imageMap);
                await writeMap(map);
            } catch (err) {
                console.error(`❌ Error syncing ${filePath}:`, err);
            }
        }
    });

    console.log('👀 Watching for changes...');
};

watchAndSync();
