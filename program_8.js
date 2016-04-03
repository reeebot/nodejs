var http = require("http");                 //callback hell version
var webaddr1 = process.argv[2];
var webaddr2 = process.argv[3];
var webaddr3 = process.argv[4];
var body1 = "";
var body2 = "";
var body3 = "";

http.get(webaddr1, function(response) {
    response.setEncoding('utf8');
    response.on("data", function(chunk) {
      body1 += chunk;
      });
    response.on("end", function() {
      console.log(body1);
      
      http.get(webaddr2, function(response) {
    response.setEncoding('utf8');
    response.on("data", function(chunk) {
      body2 += chunk;
      });
    response.on("end", function() {
      console.log(body2);
      
      http.get(webaddr3, function(response) {
    response.setEncoding('utf8');
    response.on("data", function(chunk) {
      body3 += chunk;
      });
    response.on("end", function() {
      console.log(body3);
      });
    response.on("error", console.error);
});
      });
    response.on("error", console.error);
});
      });
    response.on("error", console.error);
});
