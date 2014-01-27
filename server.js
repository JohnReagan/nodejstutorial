var express = require('express');

var app = express();
var port = 8000;
app.listen(8000);

console.log("Express erver listening to port " + port);

app.get('/', function(req, res) {
    res.send("welcome to CS1501");
});
