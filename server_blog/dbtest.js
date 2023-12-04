const mongoose = require("mongoose");
const userModel = require("./models/userModel");

mongoose.connect("mongodb://localhost/testDB");

userModel.create([
{
    id: "ChanPark",
    age: 24,
    address: "Gwangju"
},
{
    id: "ChanPark2",
    age: 44,
    address: "Seoul"
}
]).then(result => {
    console.log(result);
});