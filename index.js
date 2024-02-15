import OpenAI from "openai";

const openai = new OpenAI();

async function hello() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a great robot!" },
      {
        role: "user",
        content:
          "What is the closest ski resort to Boise, Idaho?"
      }
    ],
    model: "gpt-3.5-turbo"
  });
  console.log(completion.choices[0]);
}

hello();
