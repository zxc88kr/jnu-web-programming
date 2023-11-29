const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        res.end("Home Page");
    } else if (req.url == "/about") {
        res.end("About us");
    } else if (req.url == "/contact") {
        res.end("Contact us");
    } else {
        res.writeHead(404);
        res.end("Resource Not Found");
    }
});
server.listen(3300, () => {
    console.log("server on 3300")
});