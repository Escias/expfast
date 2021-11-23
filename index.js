const express = require('express')
let app = express();

app.get('/', function (req, res) {
    res.send('GET request to the about page');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});