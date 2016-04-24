var config = require('./config')
var knex = require('knex')(config.sqlite)
//var knex = require('knex')(config.postgres)

knex.select('title', 'rating').from('book').asCallback(function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});

// Destroy the connection pool
knex.destroy();

console.log('done')