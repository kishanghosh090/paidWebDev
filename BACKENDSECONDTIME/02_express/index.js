import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

let teaData = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(201).json(newTea);
});
app.get("/teas", (req, res) => {
  res.json(teaData);
})

//-----------port listening------------
app.listen(PORT, () => {
  console.log(`server is listning at PORT: ${PORT}`);
});
