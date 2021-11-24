const express = require('express')
require('dotenv').config()
const mongoose = require("mongoose")
const nunjucks = require('nunjucks')
const route = require('./router/router')

let app = express()

const hostname = '127.0.0.1';
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use('/', route)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to Mongoose")
});

module.exports = app
