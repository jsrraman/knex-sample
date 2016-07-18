function Query(knex) {
  // Select query examples
  var query = knex.select().from('book').distinct().groupBy('id', 'author_id');
  // var query = knex.select().from('book').where('id', 1).distinct().groupBy('id', 'author_id');

  return query
}

module.exports = Query