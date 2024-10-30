//export

const { Module } = require("module");

function add(a, b) {
  return a + b;
}

function subTract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
module.exports = {
  add,
  subTract,
  multiply,
};
