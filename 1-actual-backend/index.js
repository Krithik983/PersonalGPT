const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

// CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
  })
);

// Parse JSON request bodies
app.use(express.json());

app.post("/upload", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const genAI = new GoogleGenerativeAI("AK");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    res.json({ response: { text: result.response.text() } });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
