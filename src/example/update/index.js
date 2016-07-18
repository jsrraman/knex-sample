function Update(knex, screen) {
  knex('author').where('id', '=', 3).update({lastname: 'vishwa'}).then(function(count) {
    console.log(count)
    return knex('author')
  }).then(function(authors) {
    screen.write(authors, 'json')
  }).finally(function() {
    knex.destroy()
  })
}

module.exports = Update