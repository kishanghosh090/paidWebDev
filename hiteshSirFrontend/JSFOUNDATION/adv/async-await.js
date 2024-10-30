function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "kishan", url: "https://kishanranaghosh.onrender.com" });
    }, 3000);
  });
}
// async await usings ----------------------->>>>>>>>>>>>>..
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("user data", userData);
  } catch (error) {
    console.log(error);
  }
}
getUserData();
