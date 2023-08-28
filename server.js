const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const content = fs.readFileSync("home.html", "utf-8");
    res.end(content);
  } else if (req.url == "/about") {
    const content = fs.readFileSync("about.html", "utf-8");
    res.end(content);
  } else if (req.url == "/contact") {
    const content = fs.readFileSync("contact.html", "utf-8");
    res.end(content);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
