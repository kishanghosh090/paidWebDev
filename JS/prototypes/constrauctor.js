// function Greet(name) {
//   console.log("hello, ", name);
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
  function func() {
    console.log(`name = ${this.name} and age = ${this.age}`);
  }
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const kishan = new Person("kishan", 19);

let myCar = new Car("Toyota", "camry");
// console.log(myCar);

// console.log(kishan.);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `congo for purchsing ${this.type}`;
  };
}

Tea.prototype.color = function () {
  return `Your tea's color is black and brown ${this.type} `;
};
let tea = new Tea("alychi");
console.log(tea.color());

function Drink(params) {
  if (!new.target) {
    throw new Error("must be called with new");
  }
  this.type = params;
}
