var dbConfig = require('./config/db')
//var knex = require('knex')(dbConfig.sqlite)
var knex = require('knex')(dbConfig.postgres)
var screen = require('./src/util/screen')

screen.clear()

knex.select('title', 'rating').from('book').asCallback(function(err, data) {
	if (err) {
		console.error(err);
	} else {
		screen.write(data, 'json');
	}
});

// Destroy the connection pool
knex.destroy();