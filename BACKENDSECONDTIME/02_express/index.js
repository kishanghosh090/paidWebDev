import express from "express";
// import dotenv from "dotenv";
import "dotenv/config";
import logger from "./logger.js";
import morgan from "morgan";
import path, { dirname } from "path";
import fs from "fs";
// console.log(morgan);

const app = express();
const PORT = process.env.PORT || 4001;
// config dotenv------
// dotenv.config({
//   path: "./.env",
// });

const morganFormat = ":method :url :status :response-time ms";
app.use(express.json());
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// start app---------------->>>>>>>>>>>>
let filePath = "./teas.json";
let teaData = [];
let nexId = 1;

function AddTeaToFile(teas) {
  const jsonData = JSON.stringify(teas);
  fs.writeFileSync(filePath, jsonData);
}
function ReadTeaFromFile() {
  try {
    const jsonData = fs.readFileSync(filePath);
    teaData = JSON.parse(jsonData);
    return teaData;
  } catch (error) {
    console.log(error);
  }
}
// add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nexId++, name, price };
  teaData.push(newTea);
  console.log(newTea);
  AddTeaToFile(teaData);
  //   console.log(teaData);
  res.status(201).send(newTea);
});

// get all tea
app.get("/teas", (req, res) => {
  let teas = ReadTeaFromFile();
  res.status(201).send(teas);
});

// get a tea with id
app.get("/teas/:id", (req, res) => {
  const myTea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!myTea) {
    return res.status(404).send("not found");
  }
  res.status(404).send(myTea);
});

// update tea------------------>>>>>>>>>
app.put("/teas/:id", (req, res) => {
  const myTea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!myTea) {
    return res.status(404).send("not found");
  }
  const { name, price } = req.body;
  myTea.name = name;
  myTea.price = price;
  res.send(200).send(teaData);
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
