const express = require("express");
const item = express.Router();

const Item = require('../models/item');

// CREATE
item.post('/new', async (req, res) => {
    try {
      let { ...etc } = req.body

       const item = await new Item({
          ...etc, 
       }).save()
 
       res.send(item)
 
    } catch (error) {
       res.status(500).json({message: `Unable to add Item: ${ error }`})
       console.log(error)
    }
 })

  module.exports = item