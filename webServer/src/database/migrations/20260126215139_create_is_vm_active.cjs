/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =   async function (knex) {
    await knex.schema.createTable('is_vm_active', table => {
        table.uuid('virtual_machine_id').notNullable().references('id').inTable('virtual_machine').onDelete('CASCADE');

        table.uuid('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE');

        table.primary(['virtual_machine_id', 'user_id'])

        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =   async function (knex) {
    await knex.schema.dropTable('is_vm_active')
};
