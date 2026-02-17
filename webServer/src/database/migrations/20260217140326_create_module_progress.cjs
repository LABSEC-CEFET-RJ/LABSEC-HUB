
exports.up = async function(knex) {
    await knex.schema.createTable('module_progress', table => {
        table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
        table.integer('module_id').unsigned().notNullable().references('id').inTable('module').onDelete('CASCADE');
        table.primary(['user_id', 'module_id']);
        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("module_progress");
};
