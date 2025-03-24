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

// Encapulation----------------------------------------

class BankAccount {
  #balance = 12;

  deposite(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return this.#balance;
  }
}

let myAccount = new BankAccount();
// console.log(myAccount.deposite(100));
// console.log(myAccount.#balance)
// console.log(myAccount.getBalance());

// Abstraction----------------

class CoffeMachine {
  start() {
    // call a db
    // filter value
    return `Coffe machine is started`;
  }
  brewCoffee() {
    // complex calculation
    return `Coffe is brewed`;
  }
  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} \n ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());

// polymorphism ---------------------

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can't fly`;
  }
}

class Sparrow extends Bird {
  fly() {
    return `Sparrow is flying`;
  }
}

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();

// console.log(Calculator.add(2, 3));
// console.log(miniCalc.add(2, 3)); // not a function error will be thrown

// getter and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary can't be negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `Salary is ${this.#salary}`;
  }
  set salary(value) {
    if (value < 0) {
      throw new Error("Salary can't be negative");
    }
    this.#salary = value;
  }
}

let empOne = new Employee("jhon", 100000);

// console.log(empOne._salary);
console.log(empOne.salary);
