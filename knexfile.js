require('dotenv').config();

module.exports = {
  production: {
    client: "sqlite3",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool : {
      min: 2,
      max: 10,
    },
  },
  dev: {
    connection: {
      filename: "./data/devSTA.db3",
    },
  },
  test: {
    connection: {
      filename: "./data/testSTA.db3",
    },
  },
};