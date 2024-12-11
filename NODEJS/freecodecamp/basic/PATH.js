const path = require("path");
console.log(path.parse("/content/subfolder/test.txt"));

const filePath = path.join("/content", "subfolder", "test.txt");
const base = path.basename(filePath);
