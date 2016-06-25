"use strict";

var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var location = require('../models/location');

function importFile() {
  var obj = JSON.parse(fs.readFileSync(path.join(__dirname, '/pois.json'), 'utf8'));
  obj.pois.forEach(function(loc) {
    var newLocation = location({name: loc.nome, address: loc.indirizzo});

    if (typeof loc.coordinate !== 'undefined') {
      var coordinate = loc.coordinate.split(' ');
      if (_.isNumber(coordinate[0])) {
        newLocation.latitude = coordinate[0];
      }

      if (_.isNumber(coordinate[1])) {
        newLocation.longitude = coordinate[1];
      }
    } else {
      console.log('No coordinate for ' + loc.nome);
    }


    newLocation.save(function(err) {
      if (err) {
        console.log(err);
      }
    });
  });

  console.log('Finish import data');
}

module.exports = {
  importFile: importFile
};