const blogPostModel = require("../models/blogPostModel");

module.exports = async (req, res) => {
    const posts = await blogPostModel.find({});
    res.render("index", {posts});
};