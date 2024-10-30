// asynchronous --------------->

console.log("chiacode");

function sayHello() {
  console.log("i would like to say hello");
}

setTimeout(() => {
  sayHello();
}, 2000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}
