/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
    await knex.schema.createTable('user_has_course', table => {
        table.uuid('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE');

        table.uuid('course_id').notNullable().references('id').inTable('course').onDelete('CASCADE');

        table.primary(['user_id', 'course_id']);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =   async function (knex) {
    await knex.schema.dropTable('user_has_course')
};
