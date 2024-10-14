// function stringToNumber(input) {
//     const val = Number(input);
//     if (val === NaN) {
//         return "Not a number";
//     }
//     return val;
// }
// const val = stringToNumber("kishan");
// // console.log(val);

// function filpBoolean(input) {
//     const val = Boolean(input);
//     console.log(val)
//     if (val == 0 || val == 1) {
//         console.log("this block executed")
//         return String(val)
//     }
//     return String(val)
// }
// // console.log(filpBoolean(0));

// function whaAmI(input) {
//     // const val = 

// }


// function printMultiplicationTable(n) {
//     let vari = 1;
//     let arr = []
//     for (let i = 1; i <= 10; i++) {
//         vari = n * i;
//         arr.push(vari)
//     }
//     return arr;
// }
// const arr = printMultiplicationTable(12)

// console.log(arr)

function stringToNumber(input) {
    const val = Number(input);
    // console.log(val);

    if (isNaN(val)) {
        return "Not a number"
    }
}
const val = stringToNumber("kishan")

console.log(val);
