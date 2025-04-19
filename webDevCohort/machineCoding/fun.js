Object.prototype.chai = function () {
    console.log(`chai aur code`);
}

const tea = {
    name: "Ice Tea"
}

// tea.chai()


// const arr = [1, 23, 45, 6]

// ERROR: .forEach function does not exist on arr variable

// Real signature ko samjho - no return,function input, value, index
// call my Function for every value

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFun) {
        const originalArr = this

        for (let i = 0; i < originalArr.length; i++) {
            userFun(originalArr[i], i)
        }
    }
}

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFun) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            result.push(userFun(this[i]), i)
        }
        return result
    }
}

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFun) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            if (userFun(this[i])) {
                result.push(this[i])
            }
        }
        return result
    }
}



let arr = [1, 2, 4, 5, 6, 7, 8]

// arr.myForEach(function (value, i) {
//     console.log(`value: ${value * value} and index: ${i}`);
// })


// signature .map
// return? - new array, Each ele Iterate,userFun

// const n = arr.map((e) => e * e)
// const n = arr.myMap((e) => e * e)
// console.log(n);



const a2 = arr.filter((e) => e % 2 == 0)


console.log(arr.myFilter((e) => e % 2 == 0))