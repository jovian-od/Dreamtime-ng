'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var DreamSchema = new Schema({
  description: {
    type: String,
    required: 'Enter description of dream'
  },
  username: {
    type: String,
    required: 'Please give username'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array
  },
  durationInHours: {
    type: Number
  }
})

module.exports = mongoose.model('Dreams', DreamSchema)
