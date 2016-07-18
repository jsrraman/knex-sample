var dbConfig = require('./config/db')

//var knex = require('knex')(dbConfig.sqlite)
var knex = require('knex')(dbConfig.postgres)

// var query = require('./src/example/select/basicQuery')(knex)
// var query = require('./src/example/select/rawQuery')(knex)
var query = require('./src/example/select/joinQuery')(knex)
var screen = require('./src/util/screen')

screen.clear()


// Run the query
run(query, 'json');

function run(knexQuery, mode) {
	return knexQuery.then(function(data) {
		screen.write(data, mode);
	}).catch(function(error) {
		screen.write(error)
	}).finally(function(error) {
		// Destroy the connection pool
		knex.destroy();
	})
};
