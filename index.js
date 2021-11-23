const express = require('express')
require('dotenv').config({path: '.env'})
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose")
let app = express()

const hostname = '127.0.0.1';
const port = 3000;
let corsOptions = {
    origin: "http://localhost:3000"
};

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

mongoose.connect('mongodb://groupe1:yaSMiFaHeHTDfy65TKA@94.130.108.19/groupe1', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongoose")


app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root: __dirname});
});

app.get('/login', function (req, res) {
    res.sendFile('views/login.html', {root: __dirname});
});

app.get('/create', function (req, res) {
    res.sendFile('views/create.html', {root: __dirname});
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});