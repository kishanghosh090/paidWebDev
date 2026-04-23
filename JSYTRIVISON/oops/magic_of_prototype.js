// // let __ = "234";
// // console.log(__);

// function multipleBy5(num) {
//   return num * 5;
// }
// multipleBy5.power = 2;
// Object.chai = "elychi";

// console.log(multipleBy5(5));

// console.log(multipleBy5.power);
// console.log(multipleBy5.chai);

// console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
  function hell() {
    console.log("dd");
  }
}
// console.log(createUser.prototype);

createUser.prototype.increment = function () {
  this.score++;
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 34);

console.log(chai.increment());


