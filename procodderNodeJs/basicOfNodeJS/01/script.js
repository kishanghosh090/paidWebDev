const fs = require("fs")

// const text = fs.readFileSync("./newText.txt")
// console.log(text.toLocaleString());
// console.log(globalThis);

// fs.renameSync("./newText.txt", "./newText.txt")
// fs.unlinkSync("./newText.txt")

const { exec } = require('child_process');

// exec("google-chrome-stable", (err, stdout, stderr) => {
//     if (err || stderr) {
//         console.log(err);

//     }
//     if (stdout) {
//         console.log(stdout);

//     }
// })