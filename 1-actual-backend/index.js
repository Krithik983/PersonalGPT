//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
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    "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", // Replace with your OpenAI API key
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Say this is a test." }],
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion.choices[0].message.content); // Access the response text
}

main();
