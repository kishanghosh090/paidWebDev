import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(function (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) {
  console.log(req.headers);
  const path = req.url;

  if (req.method == "GET") {
  }
  if (req.method == "POST") {
    switch (path) {
      case "/tweet":
        return res
          .writeHead(200, { "content-type": "application/json" })
          .end("your tweet is created");
    }
  }
  res.writeHead(200, { "content-type": "application/json" });
  res.end("thans for visiting");
});

const PORT = 8012;
server.listen(PORT, () => {
  console.log(`http server is listning at PORT ${PORT}`);
});
