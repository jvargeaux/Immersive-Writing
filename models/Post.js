const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

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
    type: [CommentSchema]
  }
});

module.exports = Post = mongoose.model('Posts', PostSchema);
