/** @format */

/// constructor function making process ----------->
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// inter link between "this" <---> "new"
let myCar = new Car("toyota", "camary");

// console.log(myCar);

//----------------->>>>>>>>>>>>>>.

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon Tea");

// console.log(lemonTea.describe());

// function and prototypes ------->

function Animal(species) {
  this.species = species;
}
Object.prototype.sound = function (name) {
  return `for Animal: ${this.species}---- for Dog: ${name}--- makes a sound`;
};
// let arr = [1,2,3,4]
// console.log(arr.sound());

let dog = new Animal("dog");
// console.log(dog.sound("sounddd"));

// ---------------------

function Drink(name) {
  if (!new.target) {
    throw new Error("Dring must be Called with 'new' ");
  }

  this.name = name;
  //   return new.target;
}
let chai = new Drink("tea");
console.log(chai.name);
