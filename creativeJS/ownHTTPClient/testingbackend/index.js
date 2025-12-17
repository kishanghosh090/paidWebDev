import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Item 1",
      language: "JavaScript",
    },
    {
      id: 2,
      name: "Item 2",
      language: "Python",
    },
    { id: 3, name: "Item 3", language: "Java" },
    { id: 4, name: "Item 4", language: "C#" },
    { id: 5, name: "Item 5", language: "Ruby" },
  ];
  res.json({ data: data });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
