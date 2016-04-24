var dbConfig = require('./config/db')
//var knex = require('knex')(dbConfig.sqlite)
var knex = require('knex')(dbConfig.postgres)
var screen = require('./src/util/screen')

screen.clear()

knex.select('title', 'rating').from('book').then(function(data) {
	screen.write(data, 'json');
}).catch(function(error) {
	screen.write(error)
}).finally(function(error) {
// Destroy the connection pool
	knex.destroy();
});
