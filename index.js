const express = require('express')
const app = express()
var fs = require('fs');

// simple router for express
app.get('/', (req, res) => {
    res.send('hello world')
})

//Create a Node.js file that reads the HTML file, and return the content: readFile method

app.get('/router_one', (req, res) => {
    fs.readFile('helperOne.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

//Create a new file using the appendFile() method: content add "hello content" appendFile method

app.get('/create_file', (req, res) => {
    fs.appendFile('helperTwo.txt', 'hello content', function (err) {
        if (err) throw err;
        console.log('saved!')
    })
})

// create file and black file open() method

app.get('/create_file_blank', (req, res) => {
    fs.open('helperThree.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
})



//localhost run
app.listen(3000, () => {
    console.log(3000)
})
