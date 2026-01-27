/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
    await knex.schema.createTable('news', table => {
        table.uuid('id').primary()
        table.string('slug', 255).unique()
        table.string('title',45).notNullable()
        table.string('subtitle',45)
        table.text('body')
        table.timestamp(true,true)

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('news')
};
