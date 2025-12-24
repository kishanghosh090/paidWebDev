const { Buffer } = require("node:buffer");
// const buf = Buffer.alloc(4); // 4 bytes
// console.log(buf);

// const buf = Buffer.from("kishan rana ghosh");
// console.log(buf, buf.toString());
// let buf2 = Buffer.allocUnsafe(30);

// console.log(buf2);
// while (false !== false) {
//   buf2 = Buffer.allocUnsafe(30);

//   console.log(buf2);
// }

// const buf = Buffer.alloc(10);
// buf.write("hello from chai code", "utf16le");
// console.log(buf.toString());

// const buf = Buffer.from("from chai aur code");
// console.log(buf.toString("utf8", 0, 4));

const buf = Buffer.from("from chai aur code");
buf[0] = 0x4a;
console.log(buf.toString());
