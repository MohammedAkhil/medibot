import mongoose from 'mongoose';
const {
  db: { host, database, username, password },
} = require('./config').default;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${username}:${password}@${host}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.error('Database connection error', err);
      });
  }
}

export default new Database();
