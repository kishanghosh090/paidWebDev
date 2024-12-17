import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const JOKES = [
  {
    id: 1,
    text: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: 2,
    text: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: 3,
    text: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: 4,
    text: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: 5,
    text: "What do you call a bear with no teeth? A gummy bear!",
  },
];

app.get("/api/jokes/joke", (req, res) => {
  res.json(JOKES);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
