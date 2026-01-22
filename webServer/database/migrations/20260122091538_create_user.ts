import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user', t => {
        t.uuid('iduser').primary().defaultTo(knex.fn.uuid())
        t.string('nickname', 45).notNullable()
        t.string('email', 45).notNullable().unique()
        t.integer('points').defaultTo(0)
        t.string('password', 255).notNullable()
        t.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('user')
}

