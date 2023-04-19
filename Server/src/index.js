const http = require("http");
const data = require("./utils/data.js");
const fs = require("fs");


const PORT = 3001;

module.exports = 
http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === "/rickandmorty/character") {
       fs.readFile(200, { "Content-Type": "aplication/json" });
        res.end(data);
    }



}).listen(PORT, "localhost");