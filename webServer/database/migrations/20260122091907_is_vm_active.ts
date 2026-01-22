import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('is_vm_active', t => {
        t.uuid('virtual_machine_idvirtual_machine').notNullable()
        t.uuid('user_iduser').notNullable()
        t.timestamps(true, true)

        t.primary(['virtual_machine_idvirtual_machine', 'user_iduser'])

        t
        .foreign('virtual_machine_idvirtual_machine')
        .references('idvirtual_machine')
        .inTable('virtual_machine')
        .onDelete('CASCADE')

        t
        .foreign('user_iduser')
        .references('iduser')
        .inTable('user')
        .onDelete('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('is_vm_active')
}

