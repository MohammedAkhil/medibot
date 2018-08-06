const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
import { Database } from './db';

app.use(express.static(__dirname + './public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all routes must be defined here.
app.get('/', (req, res) => {
  res.send({
    medicine: 'crocin',
  });
});

// If no route found, it must be redirected to 404
app.use((req, res, next) => {
  let err = { message: 'Not found', path: req.url };
  res.status(404);
  res.json(err);
});

/**
 * Catching the JS error in the program
 */
app.use((err, req, res, next) => {
  // then let the app to crash,
  // because this programmer error, should be fixed immediately
  throw err;
});

app.listen(port);

module.exports = Database;
