const express = require("express");
const path = require("path");
const app = express();

const fileUpload = require("express-fileupload");

const mongoose = require("mongoose");
const blogPostModel = require("./models/blogPostModel");

mongoose.connect("mongodb://localhost/blogDB");

app.use(express.static("./public/"));
app.use(fileUpload());
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
    const image = req.files.image;
    image.mv(path.resolve(__dirname, "public/images/", image.name), async (err) => {
        if (err) {
            console.log(err);
        } 
        await blogPostModel.create({
            ...req.body,
            image: "/images/" + image.name
        });
        res.redirect("/");
    });
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