const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./pages/home.html");
const contact = fs.readFileSync("./pages/contact.html");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        res.end(home);
    } else if (req.url == "/about") {
        res.end("About us");
    } else if (req.url == "/contact") {
        res.end(contact);
    } else {
        res.writeHead(404);
        res.end("Resource Not Found");
    }
});
server.listen(3300, () => {
    console.log("server on 3300")
});