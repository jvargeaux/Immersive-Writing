const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  order: {
    type: String
  }
});

module.exports = Post = mongoose.model('Posts', PostSchema);
