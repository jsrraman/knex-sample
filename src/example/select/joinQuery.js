function Query(knex) {
  // Inner join
  // var query = knex('book').join('author', 'author.id', '=', 'book.author_id')

  // Left join
  // var query = knex('book').leftJoin('author', 'author.id', '=', 'book.author_id')

  // Right join
  // var query = knex('book').rightJoin('author', 'author.id', '=', 'book.author_id')

  // Outer join
  // var query = knex('book').fullOuterJoin('author', 'author.id', '=', 'book.author_id')

  // Cross join
  var query = knex('book').crossJoin('author')

  return query
}

module.exports = Query