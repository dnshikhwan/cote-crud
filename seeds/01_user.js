
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('userTable').insert([
        {id: 1, username : 'usertest'},
      ]);
    });
};
