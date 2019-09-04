const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
const port = 3000;

routes(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('app is running ', port));