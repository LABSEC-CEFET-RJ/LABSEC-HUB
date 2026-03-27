
exports.up = async function(knex) {
    await knex.schema.createTable('is_vm_active', table => {
        table.integer('virtual_machine_id').unsigned().notNullable().references('id').inTable('virtual_machine').onDelete('CASCADE');
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.primary(['user_id', 'virtual_machine_id']);
        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("is_vm_active");
};
