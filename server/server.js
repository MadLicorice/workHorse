var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/DB_NAME');

// app.use(bodyParser.json());

// app.use(express.static(__dirname + '/../client/dist'));

// app.use('/ENDPOINT', ROUTER_NAME);

app.listen(1337, function() {
  console.log('listening on port 1337');
});
