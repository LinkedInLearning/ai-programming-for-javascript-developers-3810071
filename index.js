import "dotenv/config";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import FormData from "form-data";

const __dirname = path.dirname(
  fileURLToPath(import.meta.url)
);
const recordingPath = path.join(
  __dirname,
  "eve-recording.mp3"
);
const model = "whisper-1";

const data = new FormData();
data.append("model", model);
data.append("file", fs.createReadStream(recordingPath));

axios
  .post(
    "https://api.openai.com/v1/audio/transcriptions",
    data,
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": `multipart/form-data;boundary=${data.boundary}`
      }
    }
  )
  .then((response) => console.log(response.data));
