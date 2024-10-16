var score = 1222;
let name = 'kishan';
const isLoggedIn = false;
let teaTypes = ["lemon Tea", "ice Tea", "Alychi Tea", "Jinjar Tea"]
let user = {
    name: "kishan",
    email: "kishan@2005.com",
    isLoggedIn: true, 
}
const arr = [typeof score, typeof name, typeof isLoggedIn, typeof user];
console.table(arr)
console.table(typeof arr[2]);