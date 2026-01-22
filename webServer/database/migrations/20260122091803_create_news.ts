import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('news', t => {
        t.uuid('idnews').primary().defaultTo(knex.fn.uuid())
        t.string('slug', 255).unique()
        t.string('title', 45).notNullable()
        t.string('subtitle', 45)
        t.text('body')
        t.timestamps(true, true)
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('news')
}

