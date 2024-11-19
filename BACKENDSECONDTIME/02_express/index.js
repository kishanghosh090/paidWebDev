import express from "express";
const app = express();

const PORT = process.env.PORT || 4001;
app.use(express.json());

let teaData = [];
let nexId = 1;

// add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nexId++, name, price };
  teaData.push(newTea);
  //   console.log(teaData);
  res.status(201).send(newTea);
});

// get all tea
app.get("/teas", (req, res) => {
  res.status(201).send(teaData);
});

// get a tea with id
app.get("/teas/:id", (req, res) => {
  const myTea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!myTea) {
    return res.status(404).send("not found");
  }
  res.status(404).send(myTea);
});

// update tea
app.put("/teas/:id", (req, res) => {
  const myTea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!myTea) {
    return res.status(404).send("not found");
  }
  const { name, price } = req.body;
  myTea.name = name;
  myTea.price = price;
  res.send(200).send(myTea);
});

// delete tea

app.delete("/tea/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  res.status(201).send("deleted");
});

app.listen(PORT, () => {
  console.log(`App is listning at PORT: ${PORT}...`);
});
