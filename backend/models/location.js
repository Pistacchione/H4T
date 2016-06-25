"use strict";

var mongoose = require('mongoose');

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

function getAbsUrl(images) {
  return images.map(function(image) {
    return '/static/' + image;
  });
}

var locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  images: {
    type: [String],
    get: getAbsUrl
  }
}, schemaOptions);

module.exports = mongoose.model('location', locationSchema);