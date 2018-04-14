var express = require('express'),
  app = express(),
  dbConfig = require('./config/database.config.js'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  user = require('./app/models/user');
  article = require('./app/models/article');
  
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./app/routes/node_routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Workast technicall Assessment API server started on: ' + port);