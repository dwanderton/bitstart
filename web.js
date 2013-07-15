var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var number = 5;
var string = "Hello again woooorld";
var file = fs.readFileSync('./index.html');
var filestring = file.toString();

app.get('/', function(request, response) {
  response.send(filestring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
