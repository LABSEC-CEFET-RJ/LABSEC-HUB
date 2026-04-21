/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
    await knex.schema.createTable('course_progress', table => {
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.integer('course_id').unsigned().notNullable().references('id').inTable('course').onDelete('CASCADE');
        table.primary(['user_id', 'course_id']);
        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("course_progress");
};
