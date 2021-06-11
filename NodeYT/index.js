/*const obj = require('./person') */
const path = require("path");
const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  let filePath = "";
  filePath = path.join(
    __dirname,
    "public",
    req.url == "/" ? "index.html" : req.url
  );
  const extname = path.extname(filePath);
  let contentType = "";
  switch (extname) {
    case ".html":
      contentType = "text/html";
      break;
    case ".css":
      contentType = "text/css";
      break;
  }
  res.writeHead(200, {
    "Content-type": contentType,
  });
  try {
    const data = await fs.readFile(filePath, "utf-8");
    res.write(data);
    res.end();
  } catch (error) {
    if (error.code == "ENOENT") {
      res.writeHead(404, {
        "Content-type": "text/html",
      });
      res.write("<html><body><h2> page not found </h2></body> </html>");
      res.end();
    } else {
      res.statusCode = 500;
      res.end("<html><body><h2> Server error </h2></body> </html>");
    }
  }
});

// while deploying port will be assigned so need ENV Port
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(` server running at port : ${PORT}`);
});
