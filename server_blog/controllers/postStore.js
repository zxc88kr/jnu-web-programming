const path = require("path");
const blogPostModel = require("../models/blogPostModel");

module.exports = async (req, res) => {
    const image = req.files.image;
    image.mv(path.resolve(__dirname, "../public/images/", image.name), async (err) => {
        if (err) {
            console.log(err);
        } 
        await blogPostModel.create({
            ...req.body,
            image: "/images/" + image.name
        });
        res.redirect("/");
    });
};