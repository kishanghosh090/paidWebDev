/** @format */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("ERROR fetching data");
      }
    }, 3000);
  });
}
// let response = fetchData()
// console.log(response);
fetchData()
  .then((data) => {
    console.log(data);
    return "done";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
