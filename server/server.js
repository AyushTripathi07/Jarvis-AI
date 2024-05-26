import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Success',
  });
});

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    //!!! Changes in code ... because of change in OPEN AI policy
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `${prompt}`,
    //   temperature: 0,
    //   max_tokens: 3000,
    //   top_p: 1,
    //   frequency_penalty: 0.5,
    //   presence_penalty: 0,
    // });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
    


    const botResponse = response.choices[0]?.message?.content || "No response from bot";
    res.status(200).send({
      bot: botResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || 'Something went wrong');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
