/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
    await knex.schema.createTable('lesson_progress', table => {
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.integer('lesson_id').unsigned().notNullable().references('id').inTable('lesson').onDelete('CASCADE');
        table.primary(['user_id', 'lesson_id']);
        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("lesson_progress");
};
