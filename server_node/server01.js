const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("<h2>Response from the server</h2>");
    res.write("<hr>");
    res.end("<p>Hello Wrold</p>");
});
server.listen(3300, () => {
    console.log("server on 3300")
});