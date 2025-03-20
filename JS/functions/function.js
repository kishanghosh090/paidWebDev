function greet(name) {
  console.log(`Hello ${name}`);
}

// greet("kishan"); // kishan is argument

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

// console.log(makeTea("alychi tea"));

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

// console.log(orderTea("alychi tea"));

// arrow functions

// function greet() {}

// const greet = () => {};

const claculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalConst = claculateTotal(499, 100);
this.name = "kishan"
console.log(this);
