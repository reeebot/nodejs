var fs = require('fs');                                         // load a global module ‘fs’
var buf = fs.readFileSync(process.argv[2]);                     // read file and output to buffer
var str = buf.toString();                                       // convert buffer to string
var res = str.split("\n");                                      // split string up into multiple strings at every “\n”
var resB = (+res.length - 1);                                   // how many strings, turn it into a number, subtract 1
console.log(resB);
