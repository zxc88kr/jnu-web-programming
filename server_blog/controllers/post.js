const blogPostModel = require("../models/blogPostModel");

module.exports = async (req, res) => {
    let apost = await blogPostModel.findById(req.params.id);
    res.render("post", {apost});
};