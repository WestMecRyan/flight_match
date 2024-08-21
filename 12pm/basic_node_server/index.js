const http = require('http');
const sanitizeHtml = require('sanitize-html');
const port = 3000;
const server = http.createServer((req, res) => {
    // we're going to set a status code
    // a header of the type of content
    // and the response end result back to the
    // the user
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello, World\n");
    }
    else if (req.method === "GET" && req.url === "/about") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>About Me</h1><p>my name is Ryan Morales</p>");
    }
    else if (req.method === "GET" && req.url === "/attack") {
        let unsanitizedHtml ="<p>some html</p><script>alert(\"you're under attack\")</script>"
        let sanitizedHtml = sanitizeHtml(unsanitizedHtml, {
            allowedTags: ['h1', 'p', 'b', 'i', 'em', 'strong', 'a'],
            allowedAttributes: {
                'a': ['href']
            }
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(unsanitizedHtml);
    }
    else if (req.method === "GET" && req.url === "/pets") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Meet my pets</h1><p>Tigress is a dog</p><p>Kayla is a cat</p>");
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Not Found");
    }
    //  make an GET request to an endpoint called 'pets'
    // make some html that holds description of your pets
    // make all of the endpoints into if else if statements
    // the last else statement should only hold a status code of 404
    // set the header content type to text/plain
    // end the response with a message of Not Found
    // navigate to any endpoint like /other and it should say 'not found'
});
server.listen(port, () => {
    console.log(`server is listenining on ${port}`);
});