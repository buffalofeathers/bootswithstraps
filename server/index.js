var path = require('path');
var express = require('express');

var clientPath = path.join(__dirname, '../client');

var app = express();

app.use(express.static(clientPath));

app.listen(3000);