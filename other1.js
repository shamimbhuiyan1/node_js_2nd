const ohter = require("./index");
const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const address_url =
    "http://localhost:1000/contact?name=shamim&country=bangladesh";
  const parsed_url = url.parse(address_url, true);
  const queryObject = parsed_url.query;
  console.log(queryObject);
});
const PORT = 5000;
server.listen(PORT);
console.log(`Server is Running at ${PORT} `);
