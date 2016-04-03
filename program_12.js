var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var query = url.parse(req.url, true).query
    var path = url.parse(req.url, true).pathname

    var unix_array = { "unixtime": 0, }
    var time_array = { "hour": 0, "minute": 0, "second": 0 }

    var isotime = query.iso
    var date_and_time = isotime.split("T");
    var date = date_and_time.slice(0,1)
    var time = date_and_time.slice(1,2)
    var time_components = time.toString().split(":")

    var hour = time_components.slice(0,1)
    var minute = time_components.slice(1,2)
    var second = time_components.slice(2,3)
    time_array.hour = ~~hour;
    time_array.minute = ~~minute;
    time_array.second = parseInt(second, 10)

    var unixtime = (new Date(isotime)/1)
    unix_array.unixtime = unixtime

    if (path === "/api/parsetime"){
        res.end(JSON.stringify(time_array))}
    else if (path === "/api/unixtime"){
        res.end(JSON.stringify(unix_array))}
    else {res.end("error")}
});

server.listen(port, function(){
    //console.log("Server listening on: http://localhost:%s", port);
});
