var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readFile = function(filename) {
    var buffer = new Buffer(fs.readFileSync(filename));
    return buffer.toString("utf-8");
}

app.get('/', function(request, response) {
  response.send(readFile("index.html"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
