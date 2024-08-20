// branch name build-http-server
// use the built in NodeJS http module
const http = require('http');

const server = http.createServer();

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});