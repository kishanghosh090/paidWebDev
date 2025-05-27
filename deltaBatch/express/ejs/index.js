import express from "express"
import path from "path"
const app = express()
const PORT = 8080


app.set("view engine", "ejs")
app.use(express.static("public"))
// app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("home.ejs", {
        userDetails: [
            {
                name: "John Doe",
                age: 30,
                city: "New York"
            }, {
                name: "John Doe", age: 30, city: "New York"
            }, {
                name: "John Doe", age: 30, city: "New York"
            }]
    })
})


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))