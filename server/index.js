const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// GET
app.get('/', (req, res) => {
  res.send('<h1>Wazzup</h1>');
})


// DB Connect String
const dbString = require('../config/keys').mongoURI;

// Connect to DB
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));


// ROUTES
app.use('/api/posts', require('../routes/api/posts'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
