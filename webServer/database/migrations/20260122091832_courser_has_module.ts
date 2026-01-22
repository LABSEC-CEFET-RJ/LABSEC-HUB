import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('courser_has_module', t => {
        t.uuid('courser_idcourser').notNullable();
        t.uuid('module_idmodule').notNullable();

        t.primary(['courser_idcourser', 'module_idmodule']);

        t
        .foreign('courser_idcourser')
        .references('idcourser')
        .inTable('courser')
        .onDelete('CASCADE');

        t
        .foreign('module_idmodule')
        .references('idmodule')
        .inTable('module')
        .onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('courser_has_module')
}

