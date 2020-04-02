const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

router.get('/', (req, res) => {
  Post.find()
    .then(posts => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
      res.json(posts);
      // console.log(cafes);
    })
    .catch(err => next(err));
});

router.post('/', (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags ? req.body.tags : ''
  });

  newPost.save()
    .then(post => {
      res.status(201).json({ title: post.title });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Unsuccessful. Problem adding post.");
    });
})

module.exports = router;
