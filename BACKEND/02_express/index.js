import express from "express";

const app = express();

const PORT = 8081;

// app.get("/", (req, res) => {
//   res.send("hello from akash where is tea(alychi)");
// });
// app.get("/ice-tea", (req, res) => {
//   res.send("whta is ice tea?");
// });

app.use(express.json());

let teaData = [];
let nextId = 1;
// aadd a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//get all tea

app.get("/teas", (req, res) => {
  console.log(teaData);

  res.status(201).send(teaData);
});

//get a tea with id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found broooo");
  }
  res.status(200).send(tea);
});

// update tea

app.put("/teas/:id", (req, res) => {
  const { name, price } = req.body;
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found broooo");
  }
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

// delete tea
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index == -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  return res.status(200).send(teaData);
});

app.listen(PORT, () => {
  console.log(`server is listing at PORT: ${PORT}...`);
});
