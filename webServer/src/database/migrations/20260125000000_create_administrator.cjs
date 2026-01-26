/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =   async function (knex) {
    await knex.schema.createTable('administrator', table => {
        table.uuid('id').primary()
        table.string('nickname', 45).notNullable();
        table.string('email', 80).notNullable().unique();
        table.string('password', 45).notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =  async function (knex) {
    await knex.schema.dropTable('administrator')
};  
