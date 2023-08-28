// module require
const http = require("http");
const fs = require("fs");

// Server created here.
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const homePage = fs.readFileSync("home.html", "utf-8");
    res.end(homePage);
  } else if (req.url == "/about") {
    const aboutPage = fs.readFileSync("about.html", "utf-8");
    res.end(aboutPage);
  } else if (req.url == "/contact") {
    const contactPage = fs.readFileSync("contact.html", "utf-8");
    res.end(contactPage);
  } else if (req.url == "/file-write") {
    fs.writeFile("demo.txt", "Hello World", (error) => {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("This url has an error!");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("The demo file written successfully!");
        res.end();
      }
    });
  }
});

// port
const port = 3000;

// server listening
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
