function Delete(knex, screen) {
  // Delete query example

  knex('author').where('id', '>', 3).del().then(function(count) {
    console.log(count)
    return knex('author')
  }).then(function(authors) {
    screen.write(authors, 'json')
  }).finally(function() {
    knex.destroy()
  })
}

module.exports = Delete