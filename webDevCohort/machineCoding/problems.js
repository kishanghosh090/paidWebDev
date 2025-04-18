const teas = {
    name: "Lemon Tea",
    type: "Tea",
    caffine: "low",
    owner: {
        name: "kishan",
        golas: {
            google: "SDE"
        }
    }
}

console.log(teas.name)
console.log(teas["type"]);

teas.origin = "China"

console.log(teas);

delete teas.caffine

console.log(teas);

//check if property exists

// console.log(teas.hasOwnProperty("caffine"));
console.log("origin" in teas);


for (const key in teas) {
    console.log(`${key}: ${teas[key]}`);

}

const teaCopy = { ...teas } // shallow copy // ---> 
const anotherCopy = teas // reference

teaCopy.name = "Alychi key"

console.log(teaCopy);
console.log(teas);

