/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
    await knex.schema.createTable('module', table => {
        table.uuid('id').primary().defaultTo(knex.fn.uuid())
        table.string('name', 45).notNullable()
        table.string('desc', 255)
        table.string('img', 80)
        table.uuid('administrator_id').notNullable().references('id').inTable('administrator')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('module')
};
