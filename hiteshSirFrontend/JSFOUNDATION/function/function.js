/** @format */

function greet(name) {
  // name: parameter<-----(placeholder)
  console.log(`hello ${name}`);
}
// greet("kishan"); // kishan: argument

function makeTea(typeOfTea) {
  return `Making ${typeOfTea} Tea`;
}
let teaOrder = makeTea("alychi");
// console.log(teaOrder);

// --------------->

function orderTea(teaType) {
  function comfirmOrder() {
    return `order comfirm for chai`;
  }

  return comfirmOrder();
}
let orderConformation = orderTea("alychi");
// console.log(orderConformation);

// --------------- arrow function >>>>>>>>>>>>>>>>>>>>>

// function greet() {}

// const greet = () => {};

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(12, 12);
// console.log(totalCost);
