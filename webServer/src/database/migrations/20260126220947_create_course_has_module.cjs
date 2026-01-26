/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function (knex) {
    await knex.schema.createTable('course_has_module', table => {
        table.uuid('course_id').notNullable().references('id').inTable('course');
        table.uuid('module_id').notNullable().references('id').inTable('module');
        

        table.primary(['course_id', 'module_id']);

    }); 
};  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =   async function (knex) {
    await knex.schema.dropTable('course_has_module')
};
