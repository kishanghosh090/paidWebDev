/** @format */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello thi is ${this.name}`);
};

let kishn = new Person("kihsan")
kishn.greet()
