const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
//   res.send('Hello World') 
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile('index.html', options);
})

app.get('/detail', function (req, res) {
    fs.readFile('./detail.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.send("There is a server error");
          }
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log("Your project is running on port: 3000");
});