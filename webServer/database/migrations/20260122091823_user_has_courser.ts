import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user_has_courser', t => {
        t.uuid('user_iduser').notNullable();
        t.uuid('courser_idcourser').notNullable();

        t.primary(['user_iduser', 'courser_idcourser']);

        t
        .foreign('user_iduser')
        .references('iduser')
        .inTable('user')
        .onDelete('CASCADE');

        t
        .foreign('courser_idcourser')
        .references('idcourser')
        .inTable('courser')
        .onDelete('CASCADE');
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('user_has_courser')
}

