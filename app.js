//importing the http global module
const http = require('http');


//creating the server using the http global module
//createServer recieves the request and responses as parameters.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Testing manual hmtl</title></head>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('</html');
    res.end();
});

//"run" the server
server.listen(3000);
