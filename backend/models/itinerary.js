"use strict";

var mongoose = require('mongoose');
var location = require('./location');

var schemaOptions = {
  toObject: {
    getters: true,
    virtuals: true
  },
  toJSON: {
    getters: true,
    virtuals: true
  },
  id: false
};

var itinerarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    default: ''
  },
  poi: {
    type: [location]
  },
  estimatedLifetime: {
    type: Number
  }
}, schemaOptions);

module.exports = mongoose.model('itinerary', itinerarySchema);