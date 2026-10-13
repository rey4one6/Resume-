// Minimal static server for Railway. Serves index.html on Railway's PORT.
const http = require("http");
const fs = require("fs");
const path = require("path");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const file = path.join(__dirname, urlPath);
  if (!file.startsWith(__dirname)) {
    res.writeHead(403); res.end("forbidden"); return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, "index.html"), (e2, d2) => {
        if (e2) { res.writeHead(404); res.end("not found"); return; }
        res.writeHead(200, { "Content-Type": MIME[".html"] });
        res.end(d2);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`resume site on :${port}`));
