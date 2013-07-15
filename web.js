var express = require('express');

var app = express.createServer(express.logger());
var number = 5;

app.get('/', function(request, response) {
  response.send("String");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
