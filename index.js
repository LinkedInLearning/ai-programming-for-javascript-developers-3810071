import OpenAI from "openai";

const openai = new OpenAI();

async function hello() {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an amazing JavaScript developer. When I send a codeblock of JavaScript, you will return a more reusable and better written version of this code."
      },
      {
        role: "user",
        content:
          "function add(x, y) { var z = x + y; console.log(z);}add(3, 4);"
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

hello();
