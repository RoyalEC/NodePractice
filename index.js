const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  } else if (req.url === "/planet") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color: red">Hello Planet!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  } else if (req.url === "/earth") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color: red">Hello Earth!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color: red">Page Not Found</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
