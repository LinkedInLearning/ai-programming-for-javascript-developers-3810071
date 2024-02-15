import "dotenv/config";
import axios from "axios";

axios
  .post(
    "https://api.openai.com/v1/images/generations",
    {
      model: "dall-e-3",
      prompt:
        "Illustrate a majestic and confident-looking horse, standing firmly with its head held high. Capture the essence of the horse's bravery and self-assurance in its posture, its bright eyes and spirited expression. Make sure the horse's muscular and athletic structure radiates in the sunlight. The setting can be a lush green meadow with a calm blue sky overhead. Include few distant trees and birds in the sky adding to the serene and calm environment. The horse should be a symbol of strength and confidence in this peaceful setting.",
      size: "1024x1024"
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": `application/json`
      }
    }
  )
  .then((response) => console.log(response.data));
