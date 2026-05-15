/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
    await knex.schema.createTable('module_course', table => {
        table.increments("id").primary()
        table.integer('module_id').unsigned().notNullable().references('id').inTable('module').onDelete('CASCADE');
        table.integer('course_id').unsigned().notNullable().references('id').inTable('course').onDelete('CASCADE');
        table.integer("position").unsigned().notNullable();
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("module_course");
};
