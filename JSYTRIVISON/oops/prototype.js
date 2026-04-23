let myName = "kishan                ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    return `spody power is ${this.spiderman}`;
  },
};

// console.log(heroPower.thor);

// heroPower.getSpiderPower();

String.prototype.trueLength = function () {
  return this.trim().length;
};

console.log("helloooo   ".trueLength());
