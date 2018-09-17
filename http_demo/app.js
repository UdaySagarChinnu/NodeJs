var http = require('http');

http.createServer((req,res) =>{

    if(req.url === '/')
    res.write("welcome to http server connection\n");
    res.end("connected");

}).listen(3000);