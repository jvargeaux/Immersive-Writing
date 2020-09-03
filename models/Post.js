const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: Array
  }
});

module.exports = Post = mongoose.model('Posts', PostSchema);
