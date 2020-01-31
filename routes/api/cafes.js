const express = require('express');
const router = express.Router();

const Cafe = require('../../models/Cafe');

router.get('/', (req, res) => {
  Cafe.find()
    .then(cafes => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
      res.json(cafes);
      // console.log(cafes);
    })
    .catch(err => next(err));
});

router.post('/', (req, res) => {
  const newCafe = new Cafe({
    name: req.body.name
  });

  newCafe.save()
    .then(cafe => res.json(cafe))
    .catch(err => console.log(err));
})

module.exports = router;
