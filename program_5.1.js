//mymodule.js & program_5.js all in one file

var fs = require('fs');
var path = require('path');

function mymodule(dir, ext, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback (err); }
            
        files = files.filter(function (file){           //array.filter(callback)
            return path.extname(file) === '.' + ext
        })
        callback(null, files)                       //null is for error handling
    }                                               //'files' returns the filtered list back to the callback at the top
)};


mymodule(process.argv[2], process.argv[3], function (err, files) {  //err for error handling
    if (err)                                    //for error handling
        return console.error('error: ', err)    //for error handling
    
    files.forEach(function (file) {
        console.log(file)
    })
})
