var express = require('express');

var app = express();
var port =  8080,
    ip   =  '0.0.0.0';

app.use(express.static(__dirname + "/assets"));

app.listen(port, ip, function(){
  console.log('server started at ' +  port);
});
