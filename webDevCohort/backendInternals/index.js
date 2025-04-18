const fs = require("fs")

fs.writeFile("hello.txt", "evdvefv World!", (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("File created successfully")
}
)