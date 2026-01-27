/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
    await knex.schema.createTable('module_has_post', table => {
        table.uuid('module_id').notNullable().references('id').inTable('module').onDelete('CASCADE');

        table.uuid('post_id').notNullable().references('id').inTable('post').onDelete('CASCADE');

        table.primary(['module_id', 'post_id']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =  async function (knex) {
    await knex.schema.dropTable('module_has_post')

};
