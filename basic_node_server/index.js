// branch name build-http-server
// use the built in NodeJS http module
const http = require('http');
// initialize a port
const port = 3000;
// initialize a http server using the createServer method
// pass an arrow function with the req(uest) and res(ponse) objects
const server = http.createServer((req, res) => { });

// open the port on the server with the listen method
// pass a port as argument one, then pass an arrow function that will log that the server is running
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
