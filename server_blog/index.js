const express = require("express");
const app = express();

const mongoose = require("mongoose");
const blogPostModel = require("./models/blogPostModel");

mongoose.connect("mongodb://localhost/blogDB");

app.use(express.static("./public/"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
    const posts = await blogPostModel.find({});
    console.log(posts);
    res.render("index", {posts: posts});
})
app.get("/post", (req, res) => {
    res.render("post");
})
app.get("/post/new", (req, res) => {
    res.render("create");
})
app.post("/post/store", async (req, res) => {
    const data = await blogPostModel.create(req.body);
    console.log(data);
    res.redirect('/');
});
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.listen(3300, () => {
    console.log("server on port 3300")
});