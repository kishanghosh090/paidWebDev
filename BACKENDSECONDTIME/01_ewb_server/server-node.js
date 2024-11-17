const http = require("http");
const hostname = "127.0.0.1";

const PORT = 8002;

const server = http.createServer((req, res) => {
  //   console.log(req);

  if (req.url == "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log("done");
    res.end("hello ICE TEA");
  }else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found broo");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`server is listning at PORT: ${PORT}`);
});
