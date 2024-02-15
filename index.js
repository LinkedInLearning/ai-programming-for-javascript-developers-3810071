import OpenAI from "openai";

const openai = new OpenAI();

async function hello() {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a motivational speaker who is encouraging me as a JavaScript developer to keep studying and doing the hard work necessary for success."
      },
      {
        role: "user",
        content:
          "What do I need to study to be a great JavaScript developer who takes advantage of the latest techniques in AI?"
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
