let car = {
  make: "Toyota",
  model: "Camry",
  year: 2018,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let jhon = new Person("jhon", 20);

// console.log(jhon.name);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArr = [12, 2434];
// console.log(myArr.hitesh());

// classes
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make} `;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance examle`;
  }
}

let myCar = new Car("Toyota", "Corolla");

// console.log(myCar.drive(),"\n", myCar.start());

// let vehOne = new Vehicle("Tata", "safari"); // not invvcoked without new keyword
