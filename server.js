var http = require('http'),
    express = require('express'),
    app = express(),
    fileSystem = require('fs'),
    path = require('path');

app.get('/',reqprocessor_ex);
app.use(express.static('public'));

function reqprocessor_ex(req,res){
    res.send('<h3>Hail Cats!</h3>');
}   

var server = app.listen(process.env.PORT || 8080);
