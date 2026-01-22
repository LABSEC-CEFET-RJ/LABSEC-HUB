import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('module_has_post', t => {
        t.uuid('module_idmodule').notNullable()
        t.uuid('post_idpost').notNullable()

        t.primary(['module_idmodule', 'post_idpost'])

        t
        .foreign('module_idmodule')
        .references('idmodule')
        .inTable('module')
        .onDelete('CASCADE')

        t
        .foreign('post_idpost')
        .references('idpost')
        .inTable('post')
        .onDelete('CASCADE')
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('module_has_post')
}

