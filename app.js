import express from 'express';
import { json, urlencoded } from 'body-parser';
import redis from 'redis';
import Redis from './redis';

const app = express();
const port = process.env.PORT || 3000;
const redisClient = new Redis(redis);
export { redisClient };

app.use(express.static(__dirname + './public'));
app.use(json());
app.use(urlencoded({ extended: false }));

// all routes must be defined here.
import index from './routes/';

app.use('/', index);

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
