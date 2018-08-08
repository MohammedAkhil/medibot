class Redis {
  constructor(redis) {
    const client = redis.createClient();
    const { promisify } = require('util');
    this.getAsync = promisify(client.get).bind(client);
    this.onError(client);
    this.client = client;
  }

  onError(client) {
    client.on('error', err => {
      console.log('Error ' + err);
    });
  }
}

export default Redis;
