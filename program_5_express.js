var express = require('express')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(__dirname + process.argv[3]))


app.listen(process.argv[2])
