const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../models/User');

router.post('/', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  }
  console.log(user);
  User.findOne({ email: user.email }, (err, obj) => {
    if (obj) {
      console.log(obj.password);
      bcrypt.compare(user.password, obj.password, function(err, result) {
        // result == true
        if (result) {
          jwt.sign({user}, 'secretkey', (err, token) => {
            res.status(201).cookie('access_token', 'Bearer ' + token, {
              expires: new Date(Date.now() + 24 * 3600000), // 3600000 ms = 1 hour
              secure: true,
              httpOnly: true
            }).json({
              msg: "Logged in.",
              token: 'Bearer ' + token
            });
          });
        }
        else {
          console.log(err);
          res.status(400).send("Password incorrect.");
        }
      });
    }
    else {
      res.status(400).send("No user with that email found.");
    }
  })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
