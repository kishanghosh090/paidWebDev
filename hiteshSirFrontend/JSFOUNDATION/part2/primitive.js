/** @format */

// number

// let balence = 120;
// let anotherBalence = new Number(120);

// console.table([typeof balence, typeof anotherBalence]);

// //boolean

// let isActive = true;
// let isReallyActive = new Boolean(true);
// console.table([typeof isActive, typeof isReallyActive]);
// // null and undifined

// let name;
// console.log(name)

// /// string

// let myStr = "hello"
// let myStr1 = "hola"
// let userName = "kishan"
// let oldGreet = myStr + "hitesh"
// let greetMessage = `hello ${userName} !`

// // symbol(unique value // uniqueness)

// let sm1 = Symbol("kishan");
// let sm2 = Symbol("kishan");
// if (sm1 == sm2) {
//   console.log(sm1);
// }else{
//     console.log("not same");
    
// }


/// string

const game = new String('   kishan')
// console.log(game.__proto__)
// game[0] = 'a'
// console.log(game[0], game[1], game[2]);

// console.table([game.length, game.charAt("0"), game.indexOf('k')]);

// console.log(`sub String: ${game.substring(0,4)}`)
// k  i  s  h  a  n
//-6 -5 -4 -3 -2 -1
// -----> slice(-6,-1)
// console.log(`sub String: ${game.slice(0, 4)}`);
// console.log(game.slice(-6,))

// console.log(game,game.trim());


// const URL = 'https://kishanranaghosh.onrender.com'
// console.log(URL.replace(".", "_"))
// console.log(URL.replaceAll(".", "_"));
// console.log(URL);
// console.log(URL.includes("kis"),);
// const SPLIT = URL.split(".")
// console.log(SPLIT,URL)


// NUMBERS ---->

const numbers = new Number(12389)
const otherNumber = 122.523
console.log(numbers.toFixed(2));
console.log(otherNumber.toPrecision(5));// left to right ---->


