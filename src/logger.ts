import chalk from 'chalk';

export class Logger {
    private static instance: Logger;
    private batch: string[] = [];
    private batchTimer: NodeJS.Timeout | null = null;
    private readonly BATCH_DELAY = 1000; // 1 second

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    private flushBatch() {
        if (this.batch.length === 0) return;

        const counts = this.batch.reduce((acc, msg) => {
            if (msg.includes('Added')) acc.added++;
            if (msg.includes('Updated')) acc.updated++;
            if (msg.includes('Skipped')) acc.skipped++;
            return acc;
        }, { added: 0, updated: 0, skipped: 0 });

        let summary = [];
        if (counts.added > 0) summary.push(chalk.green(`${counts.added} added`));
        if (counts.updated > 0) summary.push(chalk.yellow(`${counts.updated} updated`));
        if (counts.skipped > 0) summary.push(chalk.gray(`${counts.skipped} skipped`));

        console.log(`\n📊 Batch update: ${summary.join(', ')}`);
        this.batch = [];
    }

    private scheduleBatch() {
        if (this.batchTimer) {
            clearTimeout(this.batchTimer);
        }
        this.batchTimer = setTimeout(() => this.flushBatch(), this.BATCH_DELAY);
    }

    public logUpdate(type: 'add' | 'update' | 'skip', id: string) {
        const message = type === 'add' 
            ? `✅ Added: ${id}`
            : type === 'update'
            ? `✏️ Updated: ${id}`
            : `⏭️ Skipped: ${id}`;
        
        this.batch.push(message);
        this.scheduleBatch();
    }

    public logError(message: string, error?: any) {
        console.error(chalk.red(`❌ ${message}`));
        if (error) {
            console.error(chalk.red(error));
        }
    }

    public logInfo(message: string) {
        console.log(chalk.blue(`ℹ️ ${message}`));
    }

    public logSuccess(message: string) {
        console.log(chalk.green(`✅ ${message}`));
    }

    public async flush() {
        if (this.batchTimer) {
            clearTimeout(this.batchTimer);
        }
        this.flushBatch();
    }
} 