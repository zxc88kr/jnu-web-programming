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
    res.render("index", {posts});
})

app.get("/post/new", (req, res) => {
    res.render("create");
})

app.get("/post/:id", async (req, res) => {
    let apost = await blogPostModel.findById(req.params.id);
    res.render("post", {apost});
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