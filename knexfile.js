require('dotenv').config()

module.exports = {
  production: {
    client: "pg",
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
    ...sqlite,
    connection: {
      filename: "./data/devSTA.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./data/testSTA.db3",
    },
  },
};