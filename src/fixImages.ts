import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

async function fixImageReferences(content: string): string {
    // Match patterns like {description - filename.jpg}
    const imageRegex = /\{[^}]+ - ([^}]+\.(?:jpg|png))\}/g;
    
    return content.replace(imageRegex, (match, filename) => {
        // Convert to markdown image syntax, using just the filename
        return `![](img/${filename})`;
    });
}

async function fixAnkiCards() {
    const files = await glob('anki/*.md');
    
    for (const file of files) {
        try {
            const content = await readFile(file, 'utf8');
            const fixedContent = await fixImageReferences(content);
            await writeFile(file, fixedContent, 'utf8');
            console.log(`Fixed images in ${file}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

fixAnkiCards().catch(console.error); 