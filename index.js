import OpenAI from "openai";
import "dotenv/config";
import readline from "readline";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "What is your question for the speaker coach?  \n",
  async (question) => {
    const thread = await openai.beta.threads.create();
    const message =
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: question
      });
    console.log(message);
  }
);
