const express = require("express");
const item = express.Router();

const Item = require('../models/item');
//const User = require(`../models/user`)

// CREATE
item.post('/new', async (req, res) => {
    try {
      let { ...etc } = req.body

       const item = await new Item({
          ...etc, 
       }).save()
 
       res.status(200).send(item)
 
    } catch (error) {
       res.status(500).json({message: `Unable to add Item: ${ error }`})
       console.log(error)
    }
 })

// SHOW ALL ITEMS
item.get('/view/all', async (req, res) => {
   try {
      let items = await Item.find()

      res.status(200).send(items)
     
   } catch (error) {
      res.status(500).json({message: `Error Retreiving Items: ${error}`})
   }
})

// SHOW SPECIFIC ITEM
item.get('/view/:id', async (req, res) => {
   try{
      let item = await Item.findById(req.params.id)
      res.status(200).send(item)
   } catch (error) {
      res.status(500).json({message: `Error Retreiving Item: ${error}`})
   }
})

  module.exports = item