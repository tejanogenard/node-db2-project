// describe the changes to the database schema
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      //primary key with an id, int, autoinctements
      tbl.increments()

      tbl.integer("VIN", 255).notNullable().unique()
      tbl.string("Make", 255).notNullable()
      tbl.string("Model", 255).notNullable()
      tbl.string("Miles", 255).notNullable()
      tbl.string("transmission", 255)
      tbl.string("status", 255)
  })
};

//describe how to undo the changes to the schema
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
