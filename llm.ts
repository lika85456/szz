// Create a script that calls the OpenAI API to generate ANKI cards based on given files contents.
// Load files from ./otazky from SP-5.md (including) up to SP-30.md (including) and give their content to the end of the prompt.
// use promises, top level await and async/await syntax.

const prompt = `You are tasked with generating Anki cards in the following format:

# SP-{question}-{card}
## front
[Front side content here]
## back
[Back side content here]

Rules:
- **ID:** Format the ID as SP-{question}-{card}, where:
  - {question} is question number.
  - {card} is an incremental number starting from 1 for each topic (e.g., 1-1, 1-2).
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

Content for cards:`;

import fs from 'fs/promises';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

const files = await Promise.all(
  Array.from({ length: 5 }, (_, i) => i + 1).map(async (i) => {
    const filePath = `./otazky/SP-${i}.tex`;
    const content = await fs.readFile(filePath, 'utf-8');
    return {
      content, filePath, cardBaseId: `SP-${i}`,
    };
  })
);

async function generateCards(file: typeof files[0]): Promise<string>{
  const { content, filePath, cardBaseId } = file;
  const response = await client.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      { role: "system", content: prompt},
      { role: "user", content },
    ],
    max_tokens: 30000,
    temperature: 1,
  });

  let cards = response.choices[0].message.content;
  // each card is defined by top level # so count lines starting wtih #
  if (!cards) {
    console.error(`No cards generated for ${filePath}`);
    return "";
  }
  const cardsAmount = cards.split('\n').filter(line => line.startsWith('#')).length; 
  console.log(`Generated ${cardsAmount} cards for ${filePath}`);

  // remove backtics from the start and end of the cards
  if (cards.startsWith('```')) {
    cards = cards.slice(3);
  }

  if (cards.endsWith('```')) {
    cards = cards.slice(0, -3);
  }

  return cards; 
}

//// first try to generate only the first file
//const firstFile = files[0];
//const firstFileCards = await generateCards(firstFile);
//// save it to ./anki/SP-5.md
//await fs.writeFile(`./anki/${firstFile.cardBaseId}.md`, firstFileCards, 'utf-8');

// now generate all paralelly and save them using Promise.allSettled

await Promise.allSettled(
  files.map(async (file) => {
    const cards = await generateCards(file);
    if (cards) {
      await fs.writeFile(`./anki/${file.cardBaseId}.md`, cards, 'utf-8');
    }
  })
).then((results) => {
  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error(`Error generating cards for ${files[index].filePath}:`, result.reason);
    }
  });
});
