class User {
  constructor(username, email) {
    this.username = username;
  }

  logMe() {
    console.log(`username ${this.username}`);
  }

  static createId() {
    return Math.floor(Math.random() * 1000);
  }
}

const chai = new User("kishan", "k@gmail.com");
console.log(chai.logMe());
