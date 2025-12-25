const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  res.end("thans for visiting");
});

const PORT = 8012;
server.listen(PORT, () => {
  console.log(`http server is listning at PORT ${PORT}`);
});
