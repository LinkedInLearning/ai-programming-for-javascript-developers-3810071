import "dotenv/config";
import axios from "axios";

const generateImage = async (prompt, size) => {
  try {
    const openAIAPI =
      "https://api.openai.com/v1/images/generations";
    const response = await axios.post(
      openAIAPI,
      { model: "dall-e-3", prompt, size },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": `application/json`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error occurred while generating image: ${error}`
    );
  }
};

generateImage(
  "Illustrate a majestic and confident-looking horse, standing firmly with its head held high...",
  "1024x1024"
).then((data) => console.log(data));
