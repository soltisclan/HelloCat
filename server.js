var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
http.createServer(reqprocessor).listen(8080);

function reqprocessor(req, res) {
    console.log('Got request for ' + req.url);
    if (req.url == '/favicon.icoz')
    {
        var filePath = path.join(__dirname, 'favicon.ico');
        var stat = fileSystem.statSync(filePath);
        res.writeHead(200, {
            'Content-Type': 'image/x-icon',
            'Content-Length': stat.size
        });

        var readStream = fileSystem.createReadStream(filePath);
        // We replaced all the event handlers with a simple call to readStream.pipe()
        readStream.pipe(res);
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello Cat and Azure Web Apps!</h1>');    
    }
}