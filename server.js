const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const recipeRouter = require('./routes/recipeRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is Express Server</h1></body></html>');
});

app.use('/recipes', recipeRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});