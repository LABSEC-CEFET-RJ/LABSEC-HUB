/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
  await knex.schema.createTable("virtual_machine", (table) => {
      table.increments("id").primary()
      table.uuid('public_id').defaultTo(knex.fn.uuid())
      table.string("name", 45).notNullable()
      table.string("creator", 128)
      table.string("descricao", 255)
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("virtual_machine");
};
