import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import "dotenv/config";

const prompt = ChatPromptTemplate.fromMessages([
  "human",
  "Write a haiku about {topic}"
]);

const chatModel = new ChatOpenAI();
const parser = new StringOutputParser();

const chain = prompt.pipe(chatModel).pipe(parser);

const response = await chain.invoke({
  topic: "cats"
});

console.log(response);
