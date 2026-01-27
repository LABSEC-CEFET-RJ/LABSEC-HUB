/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
        await knex.schema.createTable('user', table => {
        table.uuid('id').primary().defaultTo(knex.fn.uuid())
        table.string('nickname', 45).notNullable()
        table.string('email', 45).notNullable().unique()
        table.integer('points').defaultTo(0)
        table.string('password', 255).notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('user')
};
