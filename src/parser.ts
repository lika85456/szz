import { readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import crypto from 'crypto';
import { YankiConnect } from 'yanki-connect';

export type Card = {
    id: string;
    front: string;
    back: string;
    contentHash: string;
};

export class CardParser {
    private readonly client: YankiConnect;
    private readonly seenMedia: Set<string> = new Set();
    private readonly imageMap: Record<string, Buffer> = {};

    constructor(client: YankiConnect) {
        this.client = client;
    }

    private hashPath(p: string): string {
        return crypto.createHash('sha1').update(p).digest('hex') + path.extname(p);
    }

    private calculateContentHash(front: string, back: string): string {
        return crypto.createHash('sha1').update(front + back).digest('hex');
    }

    private latexify(input: string): string {
        return input
            .replace(/\$\$(.*?)\$\$/gs, (_, expr) => `\\[${expr}\\]`)
            .replace(/\$(.+?)\$/g, (_, expr) => `\\(${expr}\\)`);
    }

    private extractImagePaths(markdown: string): string[] {
        const regex = /!\[.*?\]\((.*?)\)/g;
        const paths: string[] = [];
        let match: RegExpExecArray | null;
        while ((match = regex.exec(markdown))) {
            paths.push(match[1]);
        }
        return paths;
    }

    private rewriteImagePaths(markdown: string, nameMap: Record<string, string>): string {
        return markdown.replace(/(!\[.*?\]\()(.*?)(\))/g, (_match, p1, p2, p3) => {
            const newName = nameMap[p2];
            return `${p1}${newName}${p3}`;
        });
    }

    private async readImages(
        imagePaths: string[],
        baseDir: string,
        nameMap: Record<string, string>
    ): Promise<void> {
        for (const relPath of imagePaths) {
            const absPath = path.resolve(baseDir, '..', relPath);
            const hashName = this.hashPath(relPath);
            nameMap[relPath] = hashName;

            if (!this.seenMedia.has(hashName)) {
                try {
                    const buffer = await readFile(absPath);
                    this.imageMap[hashName] = buffer;
                    this.seenMedia.add(hashName);

                    await this.client.media.deleteMediaFile({
                        filename: hashName,
                    });

                    await this.client.media.storeMediaFile({
                        filename: hashName,
                        data: buffer.toString('base64'),
                    });
                } catch {
                    console.warn(`⚠️ Missing image: ${absPath}`);
                }
            }
        }
    }

    public async parseFile(filePath: string): Promise<Card[]> {
        const raw = await readFile(filePath, 'utf8');
        const { content } = matter(raw);
        const imagePaths = this.extractImagePaths(content);
        const nameMap: Record<string, string> = {};

        await this.readImages(imagePaths, path.dirname(filePath), nameMap);
        const contentWithMedia = this.rewriteImagePaths(content, nameMap);

        const lines = contentWithMedia.split('\n');
        const cards: Card[] = [];
        let currentId: string | null = null;
        let front: string[] = [];
        let back: string[] = [];
        let section: 'none' | 'front' | 'back' = 'none';

        for (const line of lines) {
            if (line.startsWith('# ') && !line.startsWith('##')) {
                if (currentId && front.length && back.length) {
                    const frontContent = await marked.parse(front.join('\n'));
                    const backContent = await marked.parse(back.join('\n'));
                    const contentHash = this.calculateContentHash(frontContent, backContent);
                    
                    cards.push({
                        id: currentId,
                        front: this.latexify(frontContent),
                        back: this.latexify(backContent),
                        contentHash,
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
            const frontContent = await marked.parse(front.join('\n'));
            const backContent = await marked.parse(back.join('\n'));
            const contentHash = this.calculateContentHash(frontContent, backContent);
            
            cards.push({
                id: currentId,
                front: this.latexify(frontContent),
                back: this.latexify(backContent),
                contentHash,
            });
        }

        return cards;
    }
} 