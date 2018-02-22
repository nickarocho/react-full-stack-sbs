const express = require('express');
const path = require('path'); // used to generate abs paths from rel paths
const logger = require('morgan'); // need to npm i morgan
const bodyParser = require('body-parser'); // need to npm i body-parser

const PORT = 3001;
const app = express();

// Load all .env variables
require('dotenv').config();

// Connect to MongoDB database
require('./config/db');


// Mount middleware
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Put API routes here, before the "catch all"  route
app.use('/api', require('./api/beans'));

// The following "catch all" route is necessary for
// a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
