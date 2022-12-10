var http = require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('Hello Pes University This is abhishek on node js');
}).listen(8080);
console.log("server is up and running on http://localhost:8080");