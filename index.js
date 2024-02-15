import OpenAI from "openai";

const openai = new OpenAI();

async function hello(author, text) {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a world-renowned author."
      },
      {
        role: "user",
        content: `Write this in the style of ${author}: ${text}`
      }
    ],
    model: "gpt-3.5-turbo",
    stream: true,
    max_tokens: 60
  });
  for await (const chunk of stream) {
    process.stdout.write(
      chunk.choices[0].delta.content || ""
    );
  }
}

hello(
  "Joan Didion",
  "It was the best of times. It was the worst of times."
);
