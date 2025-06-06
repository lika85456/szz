#!/usr/bin/env bun
import { Logger } from './logger';
import { runSync, runWatch, runDry, runBackup, runRestore } from './ankiSync';
import { generateMissingCards, regenerateAllCards } from './llm';

const logger = Logger.getInstance();

async function main() {
    const command = process.argv[2];

    const fs = await import('fs/promises');
    const path = await import('path');
    const crypto = await import('crypto');

    async function copyDir(src: string, dest: string) {
        await fs.mkdir(dest, { recursive: true });
        const entries = await fs.readdir(src, { withFileTypes: true });
        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
                await copyDir(srcPath, destPath);
            } else {
                await fs.copyFile(srcPath, destPath);
            }
        }
    }

    async function removeDir(dir: string) {
        try {
            await fs.rm(dir, { recursive: true, force: true });
        } catch (e) {
            // ignore
        }
    }

    switch (command) {
        case 'sync':
            await runSync();
            break;
        case 'watch':
            await runWatch();
            break;
        case 'dry':
            await runDry();
            break;
        case 'backup': {
            const id = crypto.randomBytes(8).toString('hex');
            const backupDir = path.join(process.cwd(), 'backup', id);
            // create the file
            // await fs.writeFile(backupDir, '');
            
            await runBackup(backupDir, 'SZZ');

            break;
        }
        case 'restore': {
            const id = process.argv[3];
            if (!id) {
                logger.logError('Usage: bun src/index.ts restore <id>');
                process.exit(1);
            }
            const backupDir = path.join(process.cwd(), 'backup', id);
            
            if (!(await fs.exists(backupDir))) {
                logger.logError(`Backup directory ${backupDir} does not exist.`);
                process.exit(1);
            }

            await runRestore(backupDir);

            break;
        }
        case 'llm': {
            const subcommand = process.argv[3];
            if (subcommand === 'generate') {
                await generateMissingCards();
            } else if (subcommand === 'regenerate') {
                await regenerateAllCards();
            } else {
                logger.logInfo('Usage: bun src/index.ts llm <generate|regenerate>');
                process.exit(1);
            }
            break;
        }
        default:
            logger.logInfo('Usage: bun src/index.ts <sync|watch|dry|backup|restore <id>|llm <generate|regenerate>>');
            process.exit(1);
    }
}

main();
