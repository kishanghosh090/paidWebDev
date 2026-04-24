// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}heeeeeeeeeeeee`;
  }
}

const chai = new User("kishan", "kishanghosh090", "a@pass");

console.log(chai.encryptPassword());
