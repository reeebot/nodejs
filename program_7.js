var http = require("http");
var webaddr = process.argv[2];
var body = "";

http.get(webaddr, function(response) {
    response.setEncoding('utf8');
    response.on("data", function(chunk) {
      body += chunk;                        //streams data from 'chunk' into 'body'. += does not stop at each line break
      });
    response.on("end", function() {
      console.log(body.length);
      console.log(body + "\n");
      });
    response.on("error", console.error);
});
