import { redisClient as redis } from '../app';
import { resolve } from 'url';

const saveUserLocation = async location => {
  redis.client.hmset('location', location);
};

const getLocation = key => {
  return new Promise((resolve, reject) => {
    redis.client.hgetall('location', function(err, obj) {
      if (err) {
        reject(err);
      } else {
        resolve(obj);
      }
    });
  });
};

const searchPlaces = ({latitude, longitude}) => {
  const requestUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=pharmacy&key=${
    process.env.GOOGLE_API_KEY
  }`;
  try {
    const response = await axios.get(requestUrl);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { saveUserLocation, getLocation, searchPlaces };
