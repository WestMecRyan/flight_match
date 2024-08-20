const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Flight Information Tracker');
 });

app.listen(port, () => {
    console.log(`Your server is running on port${port}`);
});