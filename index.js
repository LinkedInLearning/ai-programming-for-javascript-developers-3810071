import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";

const chatModel = new ChatOpenAI();

const population = await chatModel.invoke(
  "What is the population of Bend, Oregon?"
);

console.log(population);
