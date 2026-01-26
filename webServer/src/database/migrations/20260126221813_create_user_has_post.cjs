/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('user_has_post', table => {
        table.uuid('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE')
        table.uuid('post_id').notNullable().references('id').inTable('post').onDelete('CASCADE')

        table.primary(['user_id', 'post_id'])

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =   async function (knex) {
    await knex.schema.dropTable('user_has_post')

};
