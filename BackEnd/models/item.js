const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({

  name: { 
    type: String, 
    //required: true 
  },

  articleOfClothing: {
    type: String,
    //required: true,
    enum: ["Top", "Pants", "Shorts", "Skirt", "Shoes"],
  },

  styleCategory: {
    type: String,
    //required: true,
    enum: ["Y2K", "Streetwear", "Designer", "Vintage"],
  },

  color: { type: String },

  size: { type: String },

  description: { type: String },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  img: {
    type: Array
  }

});

//EXPORT
module.exports = mongoose.model('Item', itemSchema);
