const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

// making donEnv ready to use
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common")); // used to indicate request and related info

// POINT: openAI configuration completed
app.post("/getResponse", async (req, res) => {
  const prompt = req.body.prompt;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 50,
  });

  // console.log(completion.choices[0].message);
});

// port
const port = process.env.PORT || 5000;

// initializing server
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);

    app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
  } catch (error) {
    console.log(error);
  }
};

start();
