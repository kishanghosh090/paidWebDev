/** @format */

let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HP",
  __proto__: computer, // from computer
};

let tomHardWare = {
  __proto__: lenovo, // from lenovo
};

// console.log(`computer`, computer.__proto__);
// console.log(lenovo.__proto__);

// console.log(tomHardWare.__proto__, tomHardWare.__proto__.__proto__);

// new approch ----------------->
let genericCard = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};
//                      to    ,  from
Object.setPrototypeOf(tesla, genericCard);
// console.log(tesla.tyres);
// console.log(`tesla : `, Object.getPrototypeOf(tesla));
console.log(tesla.hasOwnProperty("driver"));// true
console.log(tesla.hasOwnProperty("tyres"));//false
