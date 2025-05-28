import express from "express";
import cors from "cors"


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5500",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/register", (req, res) => {

    res.send("Register");
})

app.post("/register", (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    res.send("Register");
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})