/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
    await knex.schema.createTable('module', table => {
        table.increments("id").primary()
        table.uuid('public_id').defaultTo(knex.fn.uuid())
        table.string("slug", 255).notNullable().unique()
        table.string("name", 45).notNullable()
        table.text("desc")
        table.string("img", 255)
        table.timestamps(true, true);
        table.integer('created_by').unsigned().notNullable().references('id').inTable('user')
        table.integer('updated_by').unsigned().notNullable().references('id').inTable('user')

    })
};

exports.down = async function(knex) {
        await knex.schema.dropTableIfExists("module");

};
