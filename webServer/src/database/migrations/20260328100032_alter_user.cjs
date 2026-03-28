exports.up = async function(knex) {
    await knex.schema.alterTable("user", (table) => {
    table.enu("isadmin", [0, 1]).notNullable().defaultTo(0).alter();
    });
};

exports.down = async function(knex) {
    await knex.schema.alterTable("user", (table) => {
        table.enu("isadmin", ["0", "1"]).notNullable().defaultTo(0).alter();
    });
};
