import { describe, expect, it, beforeAll, afterAll } from 'bun:test';
import { CardParser } from '../parser';
import { YankiConnect } from 'yanki-connect';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

describe('CardParser', () => {
    let parser: CardParser;
    let tempFile: string;

    beforeAll(() => {
        const client = new YankiConnect();
        parser = new CardParser(client);
        tempFile = join(tmpdir(), 'test_card.md');
    });

    afterAll(async () => {
        try {
            await unlink(tempFile);
        } catch (err) {
            // Ignore error if file doesn't exist
        }
    });

    it('should parse LaTeX expressions correctly', async () => {
        const content = `# Test Card

## front
Inline math: $E = mc^2$
Inline with spaces: $ \\frac{1}{2} $
Multiple inline: $a$ and $b$ and $c$

## back
Block math:
$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$

Mixed content:
Some text $x^2$ more text
$$\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$$
Final text`;

        await writeFile(tempFile, content);
        const cards = await parser.parseFile(tempFile);
        expect(cards).toHaveLength(1);

        const card = cards[0];
        expect(card.front).toContain('<p>Inline math: \\(E = mc^2\\)\nInline with spaces: \\( \\frac{1}{2} \\)\nMultiple inline: \\(a\\) and \\(b\\) and \\(c\\)</p>');

        // Test block math
        expect(card.back).toContain('<p>Block math:\n\\[\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\\]</p>');
        expect(card.back).toContain('<p>Mixed content:\nSome text \\(x^2\\) more text\n\\[\\sum_{i=1}^n i = \\frac{n(n+1)}{2}\\]\nFinal text</p>');
    });

    it('should handle empty LaTeX expressions', async () => {
        const content = `# Test Card

## front
Empty inline: $$ and $ $
Empty block: $$$$

## back
Empty back section`;

        await writeFile(tempFile, content);
        const cards = await parser.parseFile(tempFile);
        expect(cards).toHaveLength(1);

        const card = cards[0];
        expect(card.front).toContain('<p>Empty inline: \\[ and \\( \\)\nEmpty block: \\]$$</p>');
    });
}); 