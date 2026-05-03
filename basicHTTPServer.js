const http = require('http')
const url = require('url')

http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write("Hello World!");
    response.end();
}).listen(8080)

http.createServer((req, res) =>{
    const q = url.parse(req.url, true).query;
    let contentType = 'text/html';

    if (q.json === 'true') {
        contentType = 'application/json';
    }

    res.writeHead(200, {'content-type': contentType });
    if(contentType === 'text/html'){
        res.write('<html><body><h1>Hello, World!</h1></body></html>');
    } else {
        res.write(JSON.stringify({ message: 'Hello, World'}));
    }
    res.end();

}).listen(3000, () =>{
    console.log('Server running at http://localhost:3000/');
})



