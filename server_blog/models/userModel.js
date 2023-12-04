const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id: String,
    age: Number,
    address: String
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;