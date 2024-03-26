const http = require('http')
http.createServer(function(req,res){
    // Send http header, http status, Content-Type
    // res.writeHead(200,{'Content-Type':'text/plain'}) //txt로 해석해
    res.writeHead(200,{'Content-Type':'text/html'}) //html로 해석해
    res.end(`<h2> Hello World </h2>`) //페이지에 이거 찍고 끝내
}).listen(3000)