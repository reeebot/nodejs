var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, files) {
    if (err) {
        throw err; }
    files.forEach(function (file) {
        if ("." + process.argv[3] === path.extname(file)) { console.log(file)}
})});
