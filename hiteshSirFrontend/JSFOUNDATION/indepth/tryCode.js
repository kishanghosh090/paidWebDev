const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
descripter.writable = true;
Math.PI = 3;
console.log(descripter, Math.PI);
