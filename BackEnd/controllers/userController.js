const express = require("express");
const user = express.Router();

const bcrypt = require('bcrypt')

const User = require('../models/user');

// CREATE
user.post('/signup', async (req, res) => {
    try {
      let { password, ...etc } = req.body

       const user = await new User({
          ...etc, 
          passwordDigest: await bcrypt.hash( password, 16)
       }).save()
 
       res.send(user)
       res.redirect('/')
 
    } catch (error) {
       res.status(500).json({message: `Unable to add User: ${ error }`})
       console.log(error)
    }
 })

  module.exports = user