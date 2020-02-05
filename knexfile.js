require('dotenv').config();

module.exports = {
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		pool: {
			min: 2,
			max: 10,
		},
	},

	dev: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/devSTA.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
	},

	test: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/testSTA.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
	},
};
