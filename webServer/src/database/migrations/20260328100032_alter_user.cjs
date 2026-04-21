/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function(knex) {
  await knex.schema.raw('ALTER TABLE "user" ALTER COLUMN "isadmin" DROP DEFAULT');

  await knex.schema.raw('ALTER TABLE "user" DROP CONSTRAINT IF EXISTS "user_isadmin_check"');

  await knex.schema.raw(`
    ALTER TABLE "user" 
    ALTER COLUMN "isadmin" TYPE BOOLEAN 
    USING (
      CASE 
        WHEN isadmin::text = '1' THEN true 
        ELSE false 
      END
    )
  `);

  await knex.schema.raw('ALTER TABLE "user" ALTER COLUMN "isadmin" SET DEFAULT false');
  await knex.schema.raw('ALTER TABLE "user" ALTER COLUMN "isadmin" SET NOT NULL');
};

exports.down = async function(knex) {
  // Drop default, Muda o tipo, e adiciona a lógico do `enu` de novo
  await knex.schema.raw('ALTER TABLE "user" ALTER COLUMN "isadmin" DROP DEFAULT');
  
  await knex.schema.raw(`
    ALTER TABLE "user" 
    ALTER COLUMN "isadmin" TYPE TEXT 
    USING (CASE WHEN isadmin = true THEN '1' ELSE '0' END)
  `);

  await knex.schema.raw('ALTER TABLE "user" ADD CONSTRAINT "user_isadmin_check" CHECK (isadmin IN (\'0\', \'1\'))');
  await knex.schema.raw("ALTER TABLE \"user\" ALTER COLUMN \"isadmin\" SET DEFAULT '0'");
};