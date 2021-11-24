const express = require('express')
require('dotenv').config({path: '.env'})
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose")
const nunjucks = require('nunjucks')

let app = express()

const hostname = '127.0.0.1';
const port = 3000;
let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
    res.render('index.html')
});

app.get('/login', function (req, res) {
    res.render('login.html')
});

app.get('/create', function (req, res) {
    res.render('create/html')
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

mongoose.connect('mongodb://groupe1:yaSMiFaHeHTDfy65TKA@94.130.108.19/groupe1', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to Mongoose")
});
