const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dogname: {
    type: String,
    minlength: 4,
    maxlength: 14,
},
age: {
    type: Number,
    max: [100, "Age should be less than 100"],
    min: [0, "Age should be more than 0"]
},
breed: {
    type: String,
    required: [true, "breed is requried"]
}
})
module.exports = mongoose.model("dog", dogSchema)