var http = require("http");
var webaddr = process.argv[2];

http.get(webaddr, function(response) {
    response.setEncoding('utf8');
    response.on("data", function(chunk) {     // you can return data directly to 'console.log' instead of 'function(chunk){}'
      process.stdout.write(chunk + "\n");
      });
    response.on("error", console.error);
      });
