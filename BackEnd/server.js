const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require ('path')
require("dotenv").config();

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/api/users', require ('./controllers/userController'));
app.use('/api/items', require ('./controllers/itemController'));

app.listen(process.env.PORT || 5000, () => console.log(`listening`));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error(err));

//NOT FOUND
app.get('*', (req, res) => {
    res.status(404)
    res.send({ message: `Page Not Found` })
})