var http = require('http')                  //with functions + counter
var body = []
var count = 0
       
function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(body[i])
}

function httpGet (index) {  
   http.get(process.argv[2 + index], function (response) {  
    body[index] = []
    response.setEncoding('utf8');
    response.on("data", function(chunk) {
        body[index] += chunk;
    })
    response.on("end", function() {
        count++
        if (count == 3)
            printResults()
        })
        })
    }

for (var i = 0; i < 3; i++)
    httpGet(i)
