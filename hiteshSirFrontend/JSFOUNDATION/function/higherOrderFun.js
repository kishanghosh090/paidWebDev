/** @format */

// --------------------higher Order Function---#######---->>>

function makeTea(typeOfTea) {
  return typeOfTea;
}
function processTeaOrder(teaFun) {
  console.log(typeof teaFun);
  return teaFun("earl gray");
}
// let order = processTeaOrder(makeTea); //highrt Order function

// console.log(order);

// --------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
function createTeaMaker(name) {
  return function (teaType) {
    return `Making ${teaType} ${name}`;
  };
}

let teaMaker = createTeaMaker("ksihan");
console.log(teaMaker("green tea"));
