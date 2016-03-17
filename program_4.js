var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = process.argv[3]


fs.readdir(dir, function (err, files) {
    if (err) {
        throw err; }
    files.filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        if (ext == path.extname(file)) { console.log(file)}
})});
