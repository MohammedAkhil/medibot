if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const config = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
};

const Config = () => {
  return config;
};

module.exports = Config();
