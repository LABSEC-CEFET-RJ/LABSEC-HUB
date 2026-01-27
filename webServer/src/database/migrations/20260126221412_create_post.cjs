/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
    await knex.schema.createTable('post', table => {
        table.uuid('id').primary().defaultTo(knex.fn.uuid())
        table.string('slug', 255).unique()
        table.string('title', 45).notNullable()
        table.string('subtitle', 45)
        table.text('body')
        table.timestamps(true, true);
        table.uuid('administrator_id').notNullable().references('id').inTable('administrator')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =   async function (knex) {
    await knex.schema.dropTable('post')
};
