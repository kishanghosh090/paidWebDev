let computer = {
  cpu: 12,
};
let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let tomHardWare = {};

// console.log(`computer ${computer.__proto__}`);
// console.log(lenovo.cpu);
// console.log(lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(tesla.tyres);

console.log(Object.getPrototypeOf(tesla));
console.log(tesla.hasOwnProperty("tyres"));
