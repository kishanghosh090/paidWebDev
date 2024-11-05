const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  console.log(req.url, filePath);

  const extName = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/jsavascript",
    ".png": "text/png",
  };
  // console.log(mimeTypes[extName]);

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    // console.log(content.toString());

    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404, { "content-Type": "text/html" });
        res.end("404: file not find ");
      }
    } else {
      res.writeHead(200, { "content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`server is listing on PORT ${PORT}`);
});
