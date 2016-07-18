function Query(knex) {
  // Example 1
  // var query = knex.raw('select * from book where author_id=1')

  // Example 2
  // This is vulnerable to sql injection attack
  // var author_id = 1
  // var query = knex.raw('select * from book where author_id = ' + author_id);

  // Use bindings (? will be substitued with the variable. This is safe from sql injection attack
  // var query = knex.raw('select * from book where author_id = ?', [author_id]);

  // Example 3
  var query = knex.select(knex.raw('COUNT(*) as BookCount')).from('book');

  return query
}

module.exports = Query