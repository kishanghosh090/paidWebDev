const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => console.log("Set Timeout"), 0);

setImmediate(() => console.log("Set Imidiate"));

process.env.UV_THREADPOOL_SIZE = 1;

fs.readFile("sample.txt", "utf-8", (err, data) => {
  setTimeout(() => console.log("Set Timeout inside readfile"), 0);
  setImmediate(() => console.log("Set Imidiate inside readfile"));

  const start = Date.now();
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, data) => {
    console.log("password encrypted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, data) => {
    console.log("password encrypted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, data) => {
    console.log("password encrypted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, data) => {
    console.log("password encrypted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, data) => {
    console.log("password encrypted", Date.now() - start);
  });
});

console.log("Hello chai");
