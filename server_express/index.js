const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public/"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./pages/home.html"));
});
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./pages/contact.html"));
});
app.listen(3300);