//this module has one function: to filter files in a folder by extension

var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {         //'callback' will become 'files' from the bottom and then goes back to main program_5.js
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback (err); }

        files = files.filter(function (file){           //array.filter(function (){/../}) 
            return path.extname(file) === '.' + ext     //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
        })
        
        callback(null, files)                       //'null' is for error handling in program_5.js
    }                           //'files' returns the filtered list back to the callback at the top
)};

// function syntax:
// function(error, returndata) { if (error) {return callback (error)}  do something with data and return it to returndata }
