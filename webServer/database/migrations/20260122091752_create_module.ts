import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('module', t => {
        t.uuid('idmodule').primary().defaultTo(knex.fn.uuid())
        t.string('name', 45).notNullable()
        t.string('desc', 255)
        t.string('img', 80)
        t.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('module')
}

