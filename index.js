'use strct';

var express = require('express')
var accepts = require('accepts')
var app = express();

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on port: " + port);
});

app.get('/whoami', function(req, res) {
  res.json({
    ipaddress : req.headers['x-forwarded-for'].split(",")[0],
    language : req.headers['accept-language'].split(",")[0],
    software : req.headers['user-agent'].split(";")[1]
  });
});