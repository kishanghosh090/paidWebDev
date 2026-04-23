const user = {
  userName: "kishan",
  loginCount: 10,
  signedIn: true,

  getUserDetails: function () {
    return `get user details ${this.userName}`;
  },
};

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// // console.log(this, globalThis);
// console.log(global.global);

const promise = new Promise((res, rej) => {});
// const date = new Date();
// console.log(date.toLocaleString());

// constructor function
function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.printAll = function () {
    console.log(`${this.userName}, ${this.isLoggedIn}`);
  };
  return this;
}

//
const u1 = new User("kishan", 23, true);
// const u2 = User("raja", 23, true);
u1.printAll();

console.log(u1);
