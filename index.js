const express = require('express')
const http = require('http');
let app = express();

app.get('/about', function (req, res) {
    res.send('GET request to the about page');
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world")
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});