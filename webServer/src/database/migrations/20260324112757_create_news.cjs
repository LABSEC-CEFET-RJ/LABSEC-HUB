/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
    await knex.schema.createTable("news", (table) => {
        table.increments("id").primary()
        table.uuid('public_id').defaultTo(knex.fn.uuid())
        table.string("slug", 255).notNullable().unique()
        table.string("title", 45).notNullable()
        table.string("subtitle", 255)
        table.text("body")
        table.timestamps(true, true);
        table.integer('created_by').unsigned().notNullable().references('id').inTable('user')
        table.integer('updated_by').unsigned().notNullable().references('id').inTable('user')
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("news");
};
