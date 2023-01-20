const express = require("express");
const item = express.Router();

const Item = require('../models/item');

// CREATE
item.post('/new', async (req, res) => {
    try {
      
      let { ...recievedData} = req.body

       const item = await new Item({
          ...recievedData, 
      }).save()
      
      res.setHeader('Access-Control-Allow-Origin', '*')
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
      res.status(500).json({message: `Error Retreiving Items: ${ error }`})
   }
})

// SHOW ITEMS FOR HOMEPAGE
item.get('/view/home', async (req, res) => {
   try {
      let items = await Item.find().limit(5)

      res.status(200).send(items)
     
   } catch (error) {
      res.status(500).json({message: `Error Retreiving Items: ${ error }`})
   }
})

// SHOW SPECIFIC ITEM
item.get('/view/:id', async (req, res) => {
   try{
      let item = await Item.findById(req.params.id)
      res.status(200).send(item)
   } catch (error) {
      res.status(500).json({message: `Error Retreiving Item: ${ error }`})
   }
})

// DELETE AN ITEM 
item.delete('/delete/:id', async (req, res) => {
   try{
      let item = await Item.findByIdAndDelete(req.params.id)
      res.json({message: `Item ${item.name} Deleted`})
   } catch (error) {
      res.status(500).json({message: `Error Deleting Item: ${ error }`})
   }
})

  module.exports = item