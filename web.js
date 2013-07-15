var express = require('express');

var app = express.createServer(express.logger());
var number = 5;
var string = "Hello again woooorld";

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
