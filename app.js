//importing the http global module
const http = require('http');


//creating the server using the http global module
//createServer recieves the request and responses as parameters.
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/')
    {
        //responses
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Data</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type = "submit"></button></form></body>')
        res.write('</html');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Testing manual hmtl</title></head>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('</html');
    res.end();
});

//"run" the server
server.listen(3000);
