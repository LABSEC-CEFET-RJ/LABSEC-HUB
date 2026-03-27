
exports.up = async function(knex) {
    await knex.schema.createTable('lesson_module', table => {
        table.increments("id").primary()
        table.integer('lesson_id').unsigned().notNullable().references('id').inTable('lesson').onDelete('CASCADE');
        table.integer('module_id').unsigned().notNullable().references('id').inTable('module').onDelete('CASCADE');
        table.integer("position").unsigned().notNullable();
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("lesson_module");
};
