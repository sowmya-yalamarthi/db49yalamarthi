const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dogname: String,
age: Number,
breed: String
})
module.exports = mongoose.model("dog", dogSchema)