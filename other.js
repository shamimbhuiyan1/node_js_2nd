/* //local module
const other = require("./index");
const res = other.add(78, 65);
console.log(res); */

//core module
const ohter = require("./index");
const http = require("http");
const { stringify } = require("querystring");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>This is the Home page</p>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>This is the Contact page</p>");
    res.end();
  }

  if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>This is the About Us page</p>");
    res.end();
  }

  //uporer mto na kre o amra text/html er jagate application.json die korte pari.

  if (req.url == "/course") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ course: "ACC" }));
    res.end();
  }

  // res.end("Welcome to my first Node js server.");
  /*  console.log(req.url); */
});
const PORT = 5000;
server.listen(PORT);
console.log(`Server is Running at ${PORT} `);

/* initail examples we did /


//local module
//const { name, add } = require("./index");



/* const http = require("http");
//third party modules=> underscore js library

const _ = require("underscore");
//core modules
const server = http.createServer(function (req, res) {
  //write code here
  //  console.log(`Server is Running`);
});

server.listen(5000);

// const result = add(5, 6);
//console.log(name, "Result will be :", result);

//third party modules
var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];
const res = _.pluck(stooges, "name");
console.log(res); */
