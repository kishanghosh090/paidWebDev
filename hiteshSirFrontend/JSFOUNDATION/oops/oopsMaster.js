/** @format */

// let car = {
//   make: "toyota",
//   model: "camry",
//   year: 2020,
//   start: function () {
//     return `${this.make} car got started`;
//   },
// };
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let jhon = new Person("kishan", 12);
// console.log(jhon);

// prototyple chain

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
Array.prototype.kishn = function () {
  return `custom methon ${this}`;
};

let myArr = [1, 2, 3, 5];
// console.log(myArr.kishn());

// created classes ------------------->

class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  start() {
    return `${this.name} is car form ${this.year}`;
  }
}

class car extends Vehicle {
  drive() {
    return `${this.name}: this is inheritance example`; //inheritance
  }
}

let myCar = new car("suzuki", 1212);
// console.log(myCar.drive());

// ------------------------Encapsulation start-------------->

class BankAccount {
  #balance = 0; //not access from out of this class but access from fun^n of this class
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let BankAccountOne = new BankAccount(); /// making object from BankAccount "class"
// console.log(
//   BankAccountOne.deposit(2121),
//   `${BankAccountOne.getBalance()} balance`
// );

//------------------------------ Abstruction ------------------->

class coffeeMachine {
  start() {
    //call db
    // filter value
    return `starting the machine...`;
  }
  brewCoffee() {
    return `Brewing Coffee`;
  }
  pressStartButton() {
    let arr = [this.brewCoffee(), this.start()];
    return arr;
  }
}

let myMachine = new coffeeMachine();

// console.log(myMachine.start());

// console.log(myMachine.pressStartButton());

///  -------------PolymorPhism------------------->>>

class Bird {
  fly() {
    return `Flying...`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly(), penguin.fly());

/// static--------->
class Calculator {
  static add(a, b) {
    //nobody use it by creating the Object but use derect from Calculator class
    return a + b;
  }
}
let miniCalc = new Calculator();
// console.log(miniCalc.add(1, 2));
// console.log(Calculator.add(1, 233));.

//// ----------------- getters and setters  ----------------->
class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `this._salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      return (this._salary = value);
    }
  }
}

let emp = new Employee("kishan", -232333);
console.log(emp.salary);
