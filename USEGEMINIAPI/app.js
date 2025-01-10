import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const API_KEY = "AIzaSyCUJE_BHjI41G-9VuJo8Y6Rgq-MZTPLBpg";

import { GoogleGenerativeAI } from "@google/generative-ai";
const geneRateText = async (text) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = text;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
};
app.get("/api", (req, res) => {
  res.render("index");
});

app.post("/api", async (req, res) => {
  const { text } = req.body;
  const data = await geneRateText(text);
  console.log(data);

  res.json({ data: data });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
