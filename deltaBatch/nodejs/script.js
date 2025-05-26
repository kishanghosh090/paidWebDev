console.log("hello world from chai");

// console.log(process);

// console.log(process.argv);

const { sum } = require('./math.js');
const { sub } = require('./math.js');
// console.log(require('./math.js'));

const fun = require('./math.js');
// console.log(fun.sum(1, 2));
// console.log(fun.sub(1, 2));

const fruit = require('./foods/akash.js');
console.log(fruit);