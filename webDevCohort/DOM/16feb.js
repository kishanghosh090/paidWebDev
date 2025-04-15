Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
}

function printLog() {
    // console.log(Function);

    return `hellloooooooo!`
}

// printLog()
// printLog.describe()



function add(a, b) {
    return a + b
}

const substaract = function (a, b) {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}




function applyOperation(a, b, operation) {
    return operation(a, b)
}

const result1 = applyOperation(5, 3, add)
const result2 = applyOperation(5, 3, substaract)
const result3 = applyOperation(5, 3, multiply)
const result4 = applyOperation(5, 3, function (a, b) {
    return a / b
})

// console.log(result1);



function createCounter() {

    let count = 0

    return function () {
        count++
        return count
    }
}


function onef() {
    let myName = "kishan"
    this.myName = myName
}
console.log(onef.myName); // undefined

