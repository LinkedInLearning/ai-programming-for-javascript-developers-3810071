import OpenAI from "openai";

const openai = new OpenAI();

async function imageDescription() {
  let response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What is this a picture of?"
          },
          {
            type: "image_url",
            image_url: {
              url: "https://www.moonhighway.com/articles/incorporating-rest-data/images/skiing.jpeg"
            }
          }
        ]
      }
    ],
    model: "gpt-4-vision-preview",
    max_tokens: 100
  });
  console.log(response.choices[0].message);
}

imageDescription();
