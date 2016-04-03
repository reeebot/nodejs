var net = require('net')  
var port = process.argv[2]

function padToTwo(number) {
  if (number<=9) { number = ("0"+number); }
  return number;
}

function dateformat() {
          var date = new Date()
          return date.getFullYear() +'-'+
          (padToTwo(date.getMonth()+1)) +'-'+
          padToTwo(date.getDate()) +' '+
          padToTwo(date.getHours()) +':'+
          padToTwo(date.getMinutes()) +'\n'
     }

var server = net.createServer(function (socket) {
     socket.end(dateformat())
     })
     
server.listen(port, function() {
     console.log('server is listening')
})
