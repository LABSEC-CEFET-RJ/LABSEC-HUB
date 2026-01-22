import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('virtual_machine', t => {
        t.uuid('idvirtual_machine').primary().defaultTo(knex.fn.uuid())
        t.string('name', 45).notNullable()
        t.string('creator', 45)
        t.string('descricao', 200)
        t.timestamps(true, true)
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('virtual_machine')
}

