const express = require("express");
const item = express.Router();
const fs = require('fs');
const path = require('path');

const Item = require('../models/item');

// var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer({ storage: storage });

//const User = require(`../models/user`)

// CREATE
item.post('/new', async (req, res) => {
    try {
      
      //console.log(req)
      //  const item = await new Item({
      //     name: req.body.name,
      //     articleOfClothing: req.body.articleOfClothing,
      //     styleCategory: req.body.styleCategory,
      //     color: req.body.color,
      //     size: req.body.size,
      //     user: req.body.user,
      //     img: {
      //       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      //       contentType: 'image/*'
      //   }

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