import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function betterSpeaker() {
  const assistant = await openai.beta.assistants.create({
    name: "Rowena The Enthusiastic Speaker Coach",
    instructions:
      "You are a speaker coach! Take the content of my speech and make it funnier and more engaging!",
    model: "gpt-4"
  });
  console.log(assistant);
}

betterSpeaker();
