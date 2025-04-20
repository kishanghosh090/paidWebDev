const obj1 = {
    fname: "kishan",
    lname: "ghosh",
    age: 19,
    getFullName: function () {
        return `Welcome -> ${this.fname}`
    }
}
obj1.__proto__ = null
// console.log(obj1.__proto__.__proto__)

const obj2 = {
    fname: "akash",
    lname: "ghosh",
    age: 20,
    __proto__: obj1
}

// console.log(obj1.__proto__)
// console.log(obj1.toString());

// console.log(obj2.__proto__.getFullName());

// console.log(obj2.getFullName());


// DRY - Do Not Repeat yourself

// OOPS -> Object Oriented Programming-------
class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getFullName() {
        return `${this.fname}`
    }
}

const p1 = new Person('kishan', 'ghosh', 19)
const p2 = new Person('akash', 'ghosh')

p1.__proto__ = Person.prototype

// console.log(p1.getFullName());













