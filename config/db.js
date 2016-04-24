var db = {
	sqlite: {
		client: 'sqlite3',
		connection: {
			filename: './knex_sample.sqlite'
		}
	},
	postgres: {
		client: 'pg',
		connection: {
			host: 'localhost',
			user: 'rajaraman',
			database: 'knex_sample',
			password: 'p'
		}
	}
};

module.exports = db