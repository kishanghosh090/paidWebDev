const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("Request received");
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    
  fs.appendFile("log.txt", `${Date.now()}${req.url} \n`, (err, data) => {
    if (err) {
      console.log(err);
    }


    res.end("Hello World");
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
