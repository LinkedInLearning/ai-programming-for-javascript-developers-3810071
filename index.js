import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import "dotenv/config";

const chatModel = new ChatOpenAI();

const prompt = PromptTemplate.fromTemplate(
  "Write a haiku about {topic}"
);

const parser = new StringOutputParser();

const chain = RunnableSequence.from([
  prompt,
  chatModel,
  parser
]);

const response = await chain.invoke({
  topic: "spaceships"
});

console.log(response);
