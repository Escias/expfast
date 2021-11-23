const express = require('express')
let app = express();

app.get('/', function (req, res) {
    res.send(' Hello World');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://groupe1:yaSMiFaHeHTDfy65TKA@94.130.108.19/groupe1', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongoose")
});