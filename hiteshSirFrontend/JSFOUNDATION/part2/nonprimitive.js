/** @format */

const username = {
  "first Name": "kishan",
  lastName: "ghosh",
  isLoggedIn: true,
};
// console.log(typeof (username["first Name"]))
// console.log(username.lastName);

// Object.freeze(username) // freeze the "object"

username.greetings = function () {
  console.log("hello", this["first Name"]); // this --> context
};
// username.greetings()

// makeing object using singleton (constructor)

// const teas = {
//     best: "alychi tea",
//     good: "lemon tea",
//     bad: "ginger tea"
// }

const myteas = new Object();
myteas.bestM = "alychi tea";
myteas.goodM = "lemon tea";
myteas.badM = "ginger tea";

const yourTea = new Object();
yourTea.goodY = "lemon tea";
yourTea.bestY = "green tea";
yourTea.badY = "alychi tea";

// console.log(teas);
// const tea = Object.assign({}, myteas, yourTea)
const tea = { ...myteas, ...yourTea };
// console.log(tea);
// console.table([typeof Object.keys(tea), typeof Object.values(tea)]);
// const Tea = Object.keys(tea);

// console.log(Tea[0], Tea[1]);
// console.log(Object.entries(tea));
// console.log(tea.hasOwnProperty("good"));

// destructure of an object ----->

const favTeas = {
  best: "alychi Tea",
  price: 199.99,
  isAvilbale: true,
  isPopuler: false,
  availableDate: ["sun", "mon", "sat"],
};

const {best, price, isPopuler} = favTeas // {} <--- inside the properties treats  as variables

console.log(best);


// Arrays

// let heros = ["thor", "b", "c", true, 12, 2121212.12]
// console.log(heros[1])
