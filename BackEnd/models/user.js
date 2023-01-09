const mongoose = require('mongoose');
const { Schema } = mongoose 

// SCHEMA
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
}, {toJSON: {virtuals: true}})

// VIRTUALS
userSchema.virtual('items', {
    ref: 'Item',
    localField: '_id',
    foreignField: 'user'
})

// HOOKS
  
// EXPORT
module.exports = mongoose.model('User', userSchema);
