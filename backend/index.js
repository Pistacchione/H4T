"use strict";

var express = require('express');
var mongoose = require('mongoose');
var importer = require('./importer/importer');
var location = require('./models/location');
var itinerary = require('./models/itinerary');
var server = express();

// CONNECTION
mongoose.connect('mongodb://localhost/h4t_db');
var db = mongoose.connection;

db.on('error', function() {
  console.error.bind(console, 'connection error:');
  process.exit(1);
});

db.once('open', function() {
  startServer();
});

// SERVER ROUTES
server.get('/', function(req, res) {
  res.send('SIDEKICK server ok');
});

server.get('/locations', function(req, res, next) {
  location.find(function (err, locations) {
    if (err) {
      console.log(err);
      return next('Error reading locations from db');
    }

    res.send({'locations': locations});
  });
});

server.get('/itineraries', function(req, res, next) {
  itinerary.find(function (err, itineraries) {
    if (err) {
      console.log(err);
      return next('Error reading itineraries from db');
    }

    res.send({'itineraries': itineraries});
  });
});

server.use('/static', express.static(__dirname + '/static')); // GET /static/filename.ext

function startServer() {
  server.listen(3000, function() {
    console.log('Server started on port 3000');
    //importer.importFile();
  });
}