const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
// port -------->>>>>>
const PORT = 4000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  const extName = path.extname(filePath).toLowerCase().toString();
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err != null) {
      if (err.code === "ENOENT") {
        // console.log(err);
        res.writeHead(404, { "content-Type": "text/html" });
        res.end("page not found broooo", "utf-8");
      }
    } else {
      res.writeHead(200, { "conent-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`server is listing at PORT: ${PORT}`);
});
