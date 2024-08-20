// require the file system module
const fs = require('fs');
// require the path module
const path = require('path');

// create a function to read the flight data
function readFlightData() {
    // cache a path variable to the flights.json file
    const dataPath = path.join(__dirname, 'data', 'flights.json');
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, 'utf8', (err, data) => { });
    });

}
// create a function to write the flight data
function writeFlightData(data) {
    const dataPath = path.join(__dirname, 'data', 'flights.json');
    return new Promise((resolve, reject) => {
        fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8', (err) => { });
    });
 }