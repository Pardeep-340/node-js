const express = require('express')
const app = express()
var fs = require('fs');

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/', (req, res) => {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

app.listen(3000, () => {
    console.log(3000)
})