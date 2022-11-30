//importing the http global module
const http = require('http');


//creating the server using the http global module
//createServer recieves the request and responses as parameters.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

//"run" the server
server.listen(3000);
