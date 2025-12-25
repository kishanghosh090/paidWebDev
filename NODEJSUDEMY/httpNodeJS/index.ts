// node ---------------------------------------------------------
// import http, { IncomingMessage, ServerResponse } from "http";

// const server = http.createServer(function (
//   req: IncomingMessage,
//   res: ServerResponse<IncomingMessage>
// ) {
//   console.log(req.headers);
//   const path = req.url;

//   if (req.method == "GET") {
//   }
//   if (req.method == "POST") {
//     switch (path) {
//       case "/tweet":
//         return res
//           .writeHead(200, { "content-type": "application/json" })
//           .end("your tweet is created");
//     }
//   }
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end("thans for visiting");
// });

// const PORT = 8012;
// server.listen(PORT, () => {
//   console.log(`http server is listning at PORT ${PORT}`);
// });

// express ----------------

import express, { type Request, type Response } from "express";
const app = express();

const PORT = 8012;

app.get("/", (req: Request, res: Response) => {
  res.status(201).json({
    'sec-ch-ua-platform':'',
    msg: "hello from kishna",
  });
});
app.listen(PORT, () => {
  console.log(`server is listing at PORT ${PORT}`);
});
