function Insert(knex, screen) {
  // Insert query examples
  var charles = { id: 4, firstname: 'Charles', lastname: 'Dickens' }

  var insert = knex.insert(charles).into('author').then(function(id) {
    console.log(id)
    return knex('author')
  }).then(function(authors) {
    screen.write(authors, 'pretty')
  }).finally(function() {
    knex.destroy()
  })
}

module.exports = Insert