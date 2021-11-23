const express = require('express')
let app = express();

app.get('/', function (req, res) {
    res.send('GET request to the about page');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});