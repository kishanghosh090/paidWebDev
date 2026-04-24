const myNewObj = { username: "username" };

const val = Object.getOwnPropertyDescriptor(Math, "PI");
val.writable = false;

// console.log(val);

// const myNewObj = Object.create(null);
const chai = {
  name: "elychi",
  price: "250",
  isAvailable: true,
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
});

// not writable ----
chai.name = "dede";
console.log(chai);
