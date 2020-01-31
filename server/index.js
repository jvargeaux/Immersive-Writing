const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// Set headers, was getting Type Error: Failed to Fetch without this
app.use((req, res, next) => {
  // res.set({
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
  //   'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  // });
  next();
});

// GET
app.get('/', (req, res) => {
  res.send('<h1>Wazzup</h1>');
});


// DB Connect String
const dbString = require('../config/keys').mongoURI;

// Connect to DB
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));


// ROUTES
app.use('/api/cafes', require('../routes/api/cafes'));
app.use('/api/posts', require('../routes/api/posts'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
