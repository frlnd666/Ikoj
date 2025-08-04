// File: functions/generate.js
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Set di Firebase environment
});

const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt kosong" });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.data.choices[0].message.content;
    res.status(200).json({ result });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).json({ error: "Gagal menghasilkan respon AI" });
  }
};