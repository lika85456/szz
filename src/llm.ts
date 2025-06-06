import fs from 'fs/promises';
import path from 'path';
import OpenAI from 'openai';

const prompt = ({filename}: {filename:string})=>`You are tasked with generating Anki cards in the following format:

# SP-{question}-{card}
## front
[Front side content here]
## back
[Back side content here]

Rules:
- **ID:** Format the ID as {card type}-{question}-{card}, where:
  - {question} is question number.
  - {card} is an incremental number starting from 1 for each topic (e.g., 1-1, 1-2).
  - {card type} is the type of question resulting in a card type (e.g., SP, W, OB) based on the file name.
- **Content:**
  - Use bullet points (-) or numbered lists when appropriate.
  - Use LaTeX inside $ ... $ (single-line, inline) or $$ ... $$ (new-block) for mathematical, scientific, or technical expressions. (notably in lists use single line variant but for long definitions you can use new block)
  - To indicate an image, use markdown image syntax: \`![description](path/to/image.jpg)\` where:
    - \`description\` is a brief description of the image
    - \`path/to/image.jpg\` is the relative path to the image file (e.g. \`img/SP-5_1.jpg\`)
    - only used existing images in the source content
  - The image must be present in the content for the cards.
- **Front:** Should present a question, a fill-in-the-blank prompt, or a visual clue.
- **Back:** Should provide a full, clear, and precise answer.

Instructions:
- Generate multiple cards per topic if the subject is broad.
- Maintain clarity, accuracy, and Anki card best practices for efficient memorization.
- Output only cards, do not "chat" with the user, but if the user gives additional instructions, do as he says.
- The whole output format MUST be in code window, so use three backticks "\`\`\`"
- Make cards until the topic is fully covered with the cards. Please, cover the full content even if it takes hundreds of cards.
- Cards can overlap each other, that is fine.
- Do not use latex outside latex $ notation.
- Do not use any other formatting than markdown.
- Do not use fill in blank types of cards.

filename: ${filename}

Content for cards:`;

const otazkyDir = path.resolve(process.cwd(), 'otazky');
const ankiDir = path.resolve(process.cwd(), 'anki');

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

async function listFilesWithExt(dir: string, ext: string): Promise<string[]> {
  const files = await fs.readdir(dir);
  return files.filter(f => f.endsWith(ext) && !f.startsWith('OB'));
}

async function generateCardsForFile(texFile: string): Promise<string> {
  const filePath = path.join(otazkyDir, texFile);
  const cardBaseId = path.basename(texFile, '.tex');
  const content = await fs.readFile(filePath, 'utf-8');
  const response = await client.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      { role: "system", content: prompt({
        filename: texFile
      }) },
      { role: "user", content },
    ],
    max_tokens: 30000,
    temperature: 1,
  });

  let cards = response.choices[0].message.content;
  if (!cards) {
    console.error(`No cards generated for ${filePath}`);
    return "";
  }
  // Remove code block backticks if present
  if (cards.startsWith('```')) {
    cards = cards.slice(3);
  }
  if (cards.endsWith('```')) {
    cards = cards.slice(0, -3);
  }
  return cards;
}

export async function generateMissingCards() {
  await fs.mkdir(ankiDir, { recursive: true });
  const texFiles = await listFilesWithExt(otazkyDir, '.tex');
  const mdFiles = await listFilesWithExt(ankiDir, '.md');
  const mdBaseNames = new Set(mdFiles.map(f => path.basename(f, '.md')));

  const missingTexFiles = texFiles.filter(tex =>
    !mdBaseNames.has(path.basename(tex, '.tex'))
  );

  if (missingTexFiles.length === 0) {
    console.log('No missing Anki cards to generate.');
    return;
  }

  console.log(`Missing Anki cards for the following files:`);
  missingTexFiles.forEach(tex => {
    console.log(`- ${tex}`);
  });

  const answer = await new Promise((resolve) => {
    process.stdout.write('Do you want to generate them? (y/n): ');
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim().toLowerCase());
    });
  });

  if (answer !== 'y') {
    console.log('Aborting card generation.');
    return;
  }
  console.log('Generating missing Anki cards...');

  await Promise.allSettled(
    missingTexFiles.map(async (texFile) => {
      const cards = await generateCardsForFile(texFile);
      if (cards) {
        const mdFile = path.join(ankiDir, path.basename(texFile, '.tex') + '.md');
        await fs.writeFile(mdFile, cards, 'utf-8');
        console.log(`Generated cards for ${texFile} -> ${mdFile}`);
      }
    })
  );
}

export async function regenerateAllCards() {
  // Delete all .md files in ./anki
  try {
    const mdFiles = await listFilesWithExt(ankiDir, '.md');
    await Promise.all(
      mdFiles.map(f => fs.unlink(path.join(ankiDir, f)))
    );
    console.log('Deleted all existing Anki cards.');
  } catch (e) {
    // Directory may not exist or be empty, ignore
  }

  await fs.mkdir(ankiDir, { recursive: true });
  const texFiles = await listFilesWithExt(otazkyDir, '.tex');

  await Promise.allSettled(
    texFiles.map(async (texFile) => {
      const cards = await generateCardsForFile(texFile);
      if (cards) {
        const mdFile = path.join(ankiDir, path.basename(texFile, '.tex') + '.md');
        await fs.writeFile(mdFile, cards, 'utf-8');
        console.log(`Generated cards for ${texFile} -> ${mdFile}`);
      }
    })
  );
}
