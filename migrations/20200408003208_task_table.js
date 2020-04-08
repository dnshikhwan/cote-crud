
exports.up = function(knex) {
  return knex.schema.createTable('taskTable' , table => {
      table.increments('id').primary();
      table.string('task_title')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('taskTable')
};
