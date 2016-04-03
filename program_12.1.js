var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var query = url.parse(req.url, true).query
    var path = url.parse(req.url, true).pathname
    var t = new Date(query.iso)
    
    var unix_array = {}
    var time_array = {}

    time_array.hour = t.getHours()
    time_array.minute = t.getMinutes()
    time_array.second = t.getSeconds()
    unix_array.unixtime = (t.getTime())

    if (path === "/api/parsetime"){
        res.end(JSON.stringify(time_array))}
    else if (path === "/api/unixtime"){
        res.end(JSON.stringify(unix_array))}
    else {res.end("error")}
});

server.listen(Number(process.argv[2]));
