//this program imports 'mymodule', which has one function: it filters files in a folder by extension
//process.argv[2] is the directory to list
//process.argv[3] is the extension to filter

var mymodule = require('./mymodule.js')                     //imports my 'mymodule' module
                                                                    // 'err' for error handling (see below & mymodule.js)  
mymodule(process.argv[2], process.argv[3], function (err, files) {  // 'files' comes from the callback in mymodule.js
    if (err)                                                //for error handling
        return console.error('there was an error:', err)    //for error handling
    
    files.forEach(function (file) {
        console.log(file)
    })
})
