import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "", // Replace with your OpenAI API key
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
