const fs = require("fs");
const data = fs.readFileSync("hello.txt");
console.log(data);

const el = Buffer.from([61, 62, 61, 62, 61, 62]);
console.log(el.toString());

setTimeout(() => {
  console.log(10);
}, 1000);
