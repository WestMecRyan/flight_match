const http = require('http');
const sanitizeHtml = require('sanitize-html');
// require the fs module
const fs = require('fs');
// require the path module
const path = require('path');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }

    else if (req.method === 'GET' && req.url === '/about') {
        // set the file path to the html you want to use with path.join and __dirname
        const filePath = path.join(__dirname, 'about.html');
        // read the html with readFile method, pass the filePath, the utf8 encoding and a callback
        // the call back passes an error object and a data object
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal server error');
                return;
            }
        });
        // let unsanitizedHtml = '<h1>About Me</h1><script>alert(`xss`)</script>'
        let sanitizedHtml = sanitizeHtml(data, {
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(sanitizedHtml);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});