const mongoose = require('mongoose')
const { Schema } = mongoose 

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
})

  
//EXPORT
module.exports = mongoose.model("User", userSchema);
