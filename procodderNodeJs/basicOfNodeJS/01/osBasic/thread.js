
// console.time()
// for (let i = 0; i < 100000; i++) {
//     if (i % 50000 === 0) {
//         console.log(i);

//     }
// }

// console.timeEnd()


const { Worker } = require('worker_threads')

new Worker('./a.js')
new Worker('./b.js')
new Worker('./c.js')