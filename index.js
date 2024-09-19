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

//update content in the file using the appendFile() method: content add "hello content" appendFile method

app.get('/create_file_update', (req, res) => {
    fs.appendFile('helperTwo.txt', ' This is my text.', function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
})

// create file and black file open() method

app.get('/create_file_blank', (req, res) => {
    fs.open('helperThree.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
})

// Create a new file using the writeFile() method: 

app.get('/write_file', (req, res) => {
    fs.writeFile('helperfour.txt', 'hello contnet', function (err) {
        if (err) throw err;
        console.log('saved!')
    })
})

//  replace contnet in the file using the writeFile() method: 

app.get('/write_file_replace', (req, res) => {
    fs.writeFile('helperfour.txt', 'This is my text', function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });
})

//delete file using inlink() method:

app.get('/unlink_file', (req, res) => {
    fs.unlink('helperfour.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    })
})

//rename file in rename() method 

app.get('/rename_file', (req, res) => {
    fs.rename('helperfour.txt', 'helperfive.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed !')
    })
})

//localhost run
app.listen(3000, () => {
    console.log(3000)
})
