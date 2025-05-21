import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

type CardHash = {
    noteId: number;
    contentHash: string;
};

type MapJson = Record<string, CardHash>;

export class MapCache {
    private map: MapJson = {};
    private dirty = false;
    private saveTimeout: NodeJS.Timeout | null = null;
    private readonly mapPath: string;

    constructor(mapPath: string = './map.json') {
        this.mapPath = mapPath;
        this.loadMap();
    }

    private async loadMap() {
        try {
            const raw = await readFile(this.mapPath, 'utf8');
            this.map = JSON.parse(raw);
        } catch {
            this.map = {};
        }
    }

    private async saveMap() {
        if (this.dirty) {
            await writeFile(this.mapPath, JSON.stringify(this.map, null, 2));
            this.dirty = false;
        }
    }

    public get(id: string): CardHash | undefined {
        return this.map[id];
    }

    public set(id: string, noteId: number, contentHash: string) {
        this.map[id] = { noteId, contentHash };
        this.dirty = true;
        this.scheduleSave();
    }

    private scheduleSave() {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
        this.saveTimeout = setTimeout(() => this.saveMap(), 1000);
    }

    public async flush() {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
        await this.saveMap();
    }
} 