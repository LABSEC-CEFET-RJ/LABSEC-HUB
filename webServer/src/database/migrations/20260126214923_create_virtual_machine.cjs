/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =   async function (knex) {
    await knex.schema.createTable('virtual_machine', table => {
        table.uuid('id').primary().defaultTo(knex.fn.uuid())
        table.string('name', 45).notNullable()
        table.string('creator', 45)
        table.string('descricao', 200)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =   async function (knex) {
    await knex.schema.dropTable('virtual_machine')
};
