const express = require("express");
const app = express();

const fileUpload = require("express-fileupload");

const mongoose = require("mongoose");

const homeController = require("./controllers/home");
const newPostController = require("./controllers/newPost");
const postController = require("./controllers/post");
const postStoreController = require("./controllers/postStore");

const validMiddleware = require("./middleware/validMiddleware");

mongoose.connect("mongodb://localhost/blogDB");

app.use(express.static("./public/"));
app.use(fileUpload());
app.use(express.urlencoded({extended: true}));
app.use("/post/store", validMiddleware);
app.set("view engine", "ejs");

app.get("/", homeController);
app.get("/post/new", newPostController);
app.get("/post/:id", postController);
app.post("/post/store", postStoreController);

app.listen(3300, () => {
    console.log("server on port 3300")
});