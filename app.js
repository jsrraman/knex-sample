var dbConfig = require('./config/db')
//var knex = require('knex')(dbConfig.sqlite)
var knex = require('knex')(dbConfig.postgres)
var screen = require('./src/util/screen')

screen.clear()

//var query = knex.select().from('book').distinct();

// Raw queries example

// Example 1
//var query = knex.raw('select * from book where author_id=1')

// Example 2
// This is vulnerable to sql injection attack
var author_id = 1
//var query = knex.raw('select * from book where author_id = ' + author_id);

// Use bindings (? will be substitued with the variable. This is safe from sql injection attack
var query = knex.raw('select * from book where author_id = ?', [author_id]);

// Example 3
//var query = knex.select(knex.raw('COUNT(*) as BookCount')).from('book');

// Run the query
run(query, 'json');

function run(knexQuery, mode) {
	return knexQuery.then(function(data) {
		screen.write(data.rows, mode);
	}).catch(function(error) {
		screen.write(error)
	}).finally(function(error) {
		// Destroy the connection pool
		knex.destroy();
	})
};
