const fs = require("fs");
const filePath = "./practice.txt";

function wordOccureInAParagraph(word) {
  let i = 0;
  const dataBuffer = fs.readFileSync(filePath);
  const data = dataBuffer.toString().split(" ");
  data.forEach((item) => {
    if (item.trim().toLowerCase() == word.trim().toLowerCase()) {
      i += 1;
    }
  });
  return i;
}
const word = wordOccureInAParagraph("rAndom");
console.log(`number of words occure in the paragraph: ${word}`);
