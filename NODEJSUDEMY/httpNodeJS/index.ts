import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(function (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) {
  if (req.method == "GET") {
  }
  res.writeHead(200, { "content-type": "application/json" });
  res.end("thans for visiting");
});

const PORT = 8012;
server.listen(PORT, () => {
  console.log(`http server is listning at PORT ${PORT}`);
});
