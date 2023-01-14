const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/user', require ('./controllers/userController'));
app.use('/item', require ('./controllers/itemController'));

mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error(err));

app.listen(5000, () => console.log(`listening on port 5000`));

//NOT FOUND
app.get('*', (req, res) => {
    res.status(404)
    res.send('Page Not Found')
})