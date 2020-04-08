
exports.up = function(knex) {
  return knex.schema.createTable('userTable' , table => {
      table.increments('id').primary()
      table.string('username')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('userTable')
};
