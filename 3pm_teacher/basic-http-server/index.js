
const http = require('http');
const sanitizeHtml = require('sanitize-html');
const fs = require('fs');
const path = require('path');
const port = 3000;
// req stands for request
// res stands for response
// this is called the request, response cycle
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello from server!");
    }
    else if (req.method === 'GET' && req.url === '/about') {
        const filePath = path.join(__dirname, 'about.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end("Internal Server Error");
                return;
            }
            let sanitizedHtml = sanitizeHtml(data, {
                allowedTags: ['body', 'h1', 'h2', 'p'],
                allowedAttributes: {
                    'a': ['href'],
                }
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(sanitizedHtml);
        });
    }
    // make an endpoint called /pets
    // write some html and describe your pets at home
    else if (req.method === 'GET' && req.url === '/pets') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<H2>MY PETS</H2><H3>TIGRESS</H3><P>TIGRESS IS A MIXED DOG WITH STRIPES</P><H3>HONEY</H3><P>HONEY IS A SHITZU MIX THAT BARKS TOO MUCH</P>");
    }

    else if (req.method === 'GET' && req.url === '/attack') {
        let unsanitizedHtml = "<h2>Hi, I'm friendly</h2><script>alert(\"you're under attack!\")</script>"
        let sanitizedHtml = sanitizeHtml(unsanitizedHtml, {
            allowedTags: ['body', 'h1', 'h2'],
            allowedAttributes: {
                'a': ['href'],
            }
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(sanitizedHtml);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("Page Not Found");
    }
    // put all of the end points into if...else if statements
    // for the last else statement only put a status of 404
    // set the header to text/plain
    // send a response string to the user 'Page not found'

});
server.listen(port, () => {
    console.log(`server is listening on ${port}`);
})