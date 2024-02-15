import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import "dotenv/config";

const chatModel = new ChatOpenAI();

const prompt1 = PromptTemplate.fromTemplate(
  "What town is {restaurant} restaurant in? Respond with the name of one town."
);

const prompt2 = PromptTemplate.fromTemplate(
  "what country is the restaurant {restaurant} in? Respond in {language}."
);

const parser = new StringOutputParser();

const chain = prompt1.pipe(chatModel).pipe(parser);

const bigChain = RunnableSequence.from([
  {
    restaurant: chain,
    language: (input) => input.language
  },
  prompt2,
  chatModel,
  parser
]);

const response = await bigChain.invoke({
  restaurant: "Le Pigeon",
  language: "French"
});

console.log(response);
