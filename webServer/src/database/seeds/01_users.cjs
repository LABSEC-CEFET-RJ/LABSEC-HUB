const { faker } = require('@faker-js/faker')
require('dotenv').config()
const bcrypt = require('bcrypt')

exports.seed = async function (knex) {
  await knex('user').del()
  const users = Array.from({ length: 20 }, () => ({
    nickname: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isadmin: faker.datatype.boolean() ? 1 : 0,
    points: faker.number.int({ min: 0, max: 1000 }),
  }))
  const root = { nickname: 'root', email:  process.env.ROOT_EMAIL, password: await bcrypt.hash(process.env.ROOT_PASSWORD, 10), isadmin: 1}

  await knex('user').insert([root, ...users])
}