/** @format */

const Person = {
  name: "kishan",
  greet() {
    console.log(`hi i am ${this.name}`);
  },
};
Person.greet();

const greetFunction = Person.greet;

greetFunction();

const boundGreet = Person.greet.bind({ name: "akash" });
boundGreet();

// bind, call, apply
