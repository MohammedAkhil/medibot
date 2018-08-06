import mongoose from 'mongoose';
const {
  db: { host, database, username, password, port },
} = require('./config');

const url = `mongodb://${username}:${password}@${host}:${port}/${database}`;
console.log(url);

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(url)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.error('Database connection error', err);
      });
  }
}

export default new Database();
