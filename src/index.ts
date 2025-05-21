import { YankiConnect } from 'yanki-connect';
import chokidar, { FSWatcher } from 'chokidar';
import { glob } from 'glob';
import path from 'path';
import { MapCache } from './map';
import { CardParser } from './parser';
import type { Card } from './parser';
import { Logger } from './logger';

const DECK_NAME = 'SZZ';
const MODEL_NAME = 'Basic';

class AnkiSync {
    private readonly client: YankiConnect;
    private readonly mapCache: MapCache;
    private readonly parser: CardParser;
    private readonly logger: Logger;
    private watcher: FSWatcher | null = null;
    private isShuttingDown = false;

    constructor() {
        this.client = new YankiConnect();
        this.mapCache = new MapCache();
        this.parser = new CardParser(this.client);
        this.logger = Logger.getInstance();
    }

    private async ensureDeckExists(deckName: string) {
        const existingDecks = await this.client.deck.deckNames();
        if (!existingDecks.includes(deckName)) {
            await this.client.deck.createDeck({ deck: deckName });
            this.logger.logSuccess(`Created deck: ${deckName}`);
        }
    }

    private async syncFile(filePath: string) {
        if (this.isShuttingDown) return;
        
        this.logger.logInfo(`Syncing: ${filePath}`);
        const cards = await this.parser.parseFile(filePath);
        const deckName = `${DECK_NAME}::${path.basename(filePath, '.md')}`;

        await this.ensureDeckExists(deckName);

        for (const card of cards) {
            if (this.isShuttingDown) return;
            
            const existingCard = this.mapCache.get(card.id);
            
            if (existingCard) {
                if (existingCard.contentHash === card.contentHash) {
                    this.logger.logUpdate('skip', card.id);
                    continue;
                }

                await this.client.note.updateNote({
                    note: {
                        id: existingCard.noteId,
                        fields: {
                            Front: card.front,
                            Back: card.back,
                        },
                    },
                });
                this.mapCache.set(card.id, existingCard.noteId, card.contentHash);
                this.logger.logUpdate('update', card.id);
            } else {
                const noteId = await this.client.note.addNote({
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
                    this.mapCache.set(card.id, noteId, card.contentHash);
                    this.logger.logUpdate('add', card.id);
                } else {
                    this.logger.logError(`Failed to add card: ${card.id}`);
                }
            }
        }
    }

    private async cleanup() {
        if (this.isShuttingDown) return;
        this.isShuttingDown = true;
        
        this.logger.logInfo('Shutting down...');
        
        if (this.watcher) {
            await this.watcher.close();
        }
        
        await this.mapCache.flush();
        await this.logger.flush();
        this.logger.logSuccess('Map file saved');
        
        process.exit(0);
    }

    public async watchAndSync() {
        // Set up signal handlers
        process.on('SIGINT', () => this.cleanup());
        process.on('SIGTERM', () => this.cleanup());

        await this.ensureDeckExists(DECK_NAME);

        this.watcher = chokidar.watch(['anki', 'img'], {
            ignoreInitial: false,
        });

        // First sync all existing files
        const files = await glob('anki/**/*.md');
        await Promise.all(
            files.map(async (filePath) => {
                try {
                    await this.syncFile(filePath);
                } catch (err) {
                    this.logger.logError(`Error syncing ${filePath}`, err);
                }
            })
        );

        // Watch for changes
        this.watcher.on('change', async (filePath) => {
            if (filePath.endsWith('.md')) {
                try {
                    await this.syncFile(filePath);
                } catch (err) {
                    this.logger.logError(`Error syncing ${filePath}`, err);
                }
            }
        });

        this.logger.logInfo('Watching for changes...');
    }
}

// Start the sync process
new AnkiSync().watchAndSync(); 
