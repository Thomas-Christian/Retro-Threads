const express = require("express");
const user = express.Router();

const User = require('../models/user');

// CREATE
user.post('/signup', async (req, res) => {
    try {
       const user = await new User({
          ...req.body
       }).save()
 
       res.send(user)
 
    } catch (error) {
       res.status(500).json({message: `Unable to add User: ${ error }`})
       console.log(error)
    }
 })

  module.exports = user