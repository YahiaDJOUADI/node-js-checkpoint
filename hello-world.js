
console.log("HELLO WORLD");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
res.write( '<h1>Hello Node!!!!</h1>\n' )

  res.end();
});

server.listen(3000);


fs.writeFileSync('welcome.txt', 'Hello Node');

const data = fs.readFileSync('hello.txt');
console.log(data);
