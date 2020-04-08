
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('taskTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('taskTable').insert([
        {id: 1, task_title: 'test'},
      ]);
    });
};
