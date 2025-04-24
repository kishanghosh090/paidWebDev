const arr = ["asychi", "zira", "green", "black", "white"]
console.log(arr);

const indexOf = arr.indexOf("zira")
// console.log(indexOf);

if (indexOf > -1) {
    arr.slice(indexOf, 1)
}

arr.filter(tea => tea !== "zira")