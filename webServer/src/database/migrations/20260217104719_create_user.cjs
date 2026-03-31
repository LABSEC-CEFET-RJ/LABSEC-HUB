
exports.up = async function(knex) {
    await knex.schema.createTable("user", (table) => {
        table.increments("id").primary()
        table.uuid('public_id').defaultTo(knex.fn.uuid())
        table.string("nickname", 45).notNullable()
        table.string("email", 255).notNullable().unique()
        table.integer("points")
        table.string("password", 255).notNullable()
        table.enu("isadmin", ["0", "1"]).notNullable().defaultTo(0)
        table.timestamps(true, true)
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("user");
};
