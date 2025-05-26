const express = require('express');
const app = express();
const port = 4020;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// console.dir(app);

// api call
app.get("/search", (req, res, next) => {
    // console.log(req.query);
    // console.log(res);
    console.log(next);
    req.data = "hello world";
    next();
})

// depriecated in express 4
// app.get("*", (req, res) => {
//     res.status(404).send("all is well");
// })

app.use((req, res) => {
    // console.log(req);

    // console.log(req.url.split('/')[1]);
    // if (err) {
    //     res.status(500).send("something went wrong");
    // } else {
    //     res.status(404).send('all is well');
    // }
    const data = req.data;
    res.send({
        status: 200,
        message: "all is well",
        data
    });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
