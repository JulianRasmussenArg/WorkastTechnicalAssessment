const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

// server port number
app.set('port', process.env.PORT || 3000);

require('./app/routes')(app, {});