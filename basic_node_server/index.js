const http = require('http');
// install and require sanitize-html for sanitizing the html sent back to the client
const sanitizeHtml = require('sanitize-html');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }

    else if (req.method === 'GET' && req.url === '/about') {
        // unsanitize html that could come from user input to server
        let unsanitizedHtml = '<h1>About Me</h1><script>alert(`xss`)</script>'
        // modify the unsanitized html to sanitized html
        let sanitizedHtml = sanitizeHtml(unsanitizedHtml, {
            // allowedTags: ['h1', 'p', 'b', 'i', 'em', 'strong', 'a'],
            // allowedAttributes: {
            //     'a': ['href']
            // }
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        // add an xss script to demonstrate how cross site scripting can add malicious code
        // res.end(sanitizedHtml);
        res.end(unsanitizedHtml);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});