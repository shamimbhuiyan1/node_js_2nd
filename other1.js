const ohter = require("./index");
const http = require("http");
const fs = require("fs");
//file system

const server = http.createServer((req, res) => {
  /*--------------------------------
     asynchronous file system module
    --------------------------------------------/
    /* if ((req.url = "/")) {
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Failed to read data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } */

  /*--------------------------------
     synchronous file system module
    --------------------------------------------*/
  if ((req.url = "/")) {
    const data = fs.readFileSync("data.txt");
    res.end(data);
  }
});

//url method
/* const url = require("url");
const server = http.createServer((req, res) => {
  const address_url =
    "http://localhost:1000/contact?name=shamim&country=bangladesh";
  const parsed_url = url.parse(address_url, true);
  const queryObject = parsed_url.query;
  console.log(queryObject);
}); */
const PORT = 5000;
server.listen(PORT);
console.log(`Server is Running at ${PORT} `);
