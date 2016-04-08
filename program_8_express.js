var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], 'utf8', function (err, data) {
        if (err) {
        res.send(500);
        }
        var myobject = JSON.parse(data)
        res.json(myobject)
})
})

app.listen(process.argv[2])
