import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user_has_post', t => {
        t.uuid('user_iduser').notNullable()
        t.uuid('post_idpost').notNullable()

        t.primary(['user_iduser', 'post_idpost'])

        t
        .foreign('user_iduser')
        .references('iduser')
        .inTable('user')
        .onDelete('CASCADE')

        t
        .foreign('post_idpost')
        .references('idpost')
        .inTable('post')
        .onDelete('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('user_has_post')
}

