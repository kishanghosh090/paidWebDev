const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "myFile.txt");
// const data = fs.readFileSync(filePath);
// console.log(data.toString().toUpperCase());
const data = {
  name: "kishan",
  age: 22,
  job: "developer",
};
// fs.writeFileSync(filePath, JSON.stringify(data));
const newData = fs.readFileSync(filePath)

console.log(obj);
