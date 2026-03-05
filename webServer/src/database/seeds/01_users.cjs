const { faker } = require('@faker-js/faker')

exports.seed = async function (knex) {
  await knex('user').del()
  const users = Array.from({ length: 20 }, () => ({
    nickname: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isadmin: faker.datatype.boolean() ? '1' : '0',
    points: faker.number.int({ min: 0, max: 1000 }),
  }))
  await knex('user').insert(users)
}