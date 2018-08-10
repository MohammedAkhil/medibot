const express = require('express');
const router = express.Router();
import axios from 'axios';
import {
  saveUserLocation,
  getLocation,
  searchPlaces
} from '../models/index';

router.post('/', async (req, res) => {
  const location = req.body;
  await saveUserLocation(location);
  await getLocation('location');
  const response = await searchPlaces(location);
  res.json({
    messages: [{
        text: 'Welcome to the Chatfuel Rockets!'
      },
      {
        text: 'What are you up to?'
      },
    ],
  });
});

router.get('/shop', async (req, res) => {
  const requestUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=pharmacy&key=${
    process.env.GOOGLE_API_KEY
  }`;
  try {
    const response = await axios.get(requestUrl);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

module.exports = router;