const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", require ('./controllers/userController'));

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