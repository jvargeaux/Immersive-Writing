const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CafeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Cafe = mongoose.model('Cafes', CafeSchema);
