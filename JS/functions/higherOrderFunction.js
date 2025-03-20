function makeTea(typeOfTea) {
  return typeOfTea;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl gray");
}

let order = processTeaOrder(makeTea);

// console.log(order);

function createMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createMaker();
console.log(teaMaker("alychi tea"));
