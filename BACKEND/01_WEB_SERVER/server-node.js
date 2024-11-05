const http = require("http");

const hostName = "127.0.0.1";

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello ice tea");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("thanks for ordering ice tea its really hot");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server is listning at PORT http://localhost:${PORT}`);
});
