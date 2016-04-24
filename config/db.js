var db = {
	sqlite: {
		client: 'sqlite3',
		connection: {
			filename: './knex_sample.sqlite'
		},
		debug: true // output sql statements
	},
	postgres: {
		client: 'pg',
		connection: {
			host: 'localhost',
			user: 'rajaraman',
			database: 'knex_sample',
			password: 'p'
		},
		debug: true // output sql statements
	}
};

module.exports = db