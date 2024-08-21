// branch name build-http-server
// use the built in NodeJS http module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('hello you found the home page');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 resource not found');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
