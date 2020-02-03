require('dotenv').config();

const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  pool : {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    }
  },
};

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