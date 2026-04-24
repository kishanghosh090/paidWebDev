class User {
  constructor(username, email) {
    this.email = email;
    this.username = username;
  }

  
  get email() {
    return `${this._email}123`;
  }
  set email(val) {
    this._email = val;
  }
}

const kishan = new User("kishan@gmail.com", "123");
console.log(kishan.username);
