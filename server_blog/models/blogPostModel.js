const mongoose = require("mongoose");
const blogPostSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "익명"
    },
    title: String,
    body: String,
    date: {
        type: Date,
        default: new Date()
    },
    image: String
});

const blogPostModel = mongoose.model("BlogPost", blogPostSchema);
module.exports = blogPostModel;