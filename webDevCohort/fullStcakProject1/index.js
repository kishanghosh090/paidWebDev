import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./utils/db.js"


const app = express()
// console.log(app);

connectDB()

app.use(cors({
    origin: "http://localhost:5321",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))

const PORT = process.env.PORT || 4000;

// app.get("/", (req, res, next) => {
//     return res.send("hello from chai")
//     // next()
// })

// app.get("/piyush", (req, res) => {
//     res.send("piyush!!")
// })

import userRoute from "./routes/user.route.js"

app.use("/api/v1/users",userRoute)


// app.use((req, res) => {
//     res.json({ "status": 2001 })
// })

app.listen(PORT, () => {
    console.log(`My Server is listing at http://localhost:${PORT}`);

})