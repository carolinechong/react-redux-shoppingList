const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express in a variable called app
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Used for Postman
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/shoppinglist', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log('Listening on port 8000');
})