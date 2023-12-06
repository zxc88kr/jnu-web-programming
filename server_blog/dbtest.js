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
    id: "HyunPark",
    age: 59,
    address: "Seoul"
}
]).then(data => {
    console.log(data);
});

userModel.find({
    id:/ChanPark2/
}).then(data => {
    console.log(data);
});