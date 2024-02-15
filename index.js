import OpenAI from "openai";
import readline from "readline";

const openai = new OpenAI();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "What do you want to ask the robots",
  async (question) => {
    let res = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a friendly robot!"
        },
        {
          role: "user",
          content: question
        }
      ],
      model: "gpt-3.5-turbo"
    });
    console.log(res.choices[0].message);
    rl.close();
  }
);
