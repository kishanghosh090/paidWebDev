const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task, network call
  fetch("https://randomuser.me/api/11", {
    method: "GET",
  })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => reject(err));
});

promiseOne
  .then(async (res) => {
    console.log(await res.json());
  })
  .catch((err) => console.log(err));

const promiseFive = new Promise(function (resolve, reject) {});
