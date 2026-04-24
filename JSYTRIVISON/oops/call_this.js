function SetUserName(username) {
  // complex db calls
  //   console.log("hellooo");

  this.username = username;
}

function createUser(username, email, password) {
  // using this SetUserName's this uses createUser 'this'
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser(
  "kishanghosh090",
  "kishanghosh090@gmail.com",
  "k@pass",
);
console.log(chai);
