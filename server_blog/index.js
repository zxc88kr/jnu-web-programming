const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public/"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/post", (req, res) => {
    res.render("post");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.listen(3300, () => {
    console.log("server on port 3300")
});