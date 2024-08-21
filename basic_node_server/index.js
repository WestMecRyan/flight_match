const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    // set the http status code of the response to 200 ok
    res.statusCode = 200;
    // set a content type of text/plain which tells the clielt the type of data being sent
    res.setHeader('Content-Type', 'text/plain');
    // the server ends the cycle by res(ponding) with a string of hello world and a new line break \n
    res.end('Hello, World!\n');
});
server.listen(port, () => {
console.log(`Server running at ${port}`);});