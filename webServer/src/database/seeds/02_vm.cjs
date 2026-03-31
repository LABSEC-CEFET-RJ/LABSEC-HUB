const { faker } = require('@faker-js/faker')
exports.seed = async function (knex) {
    await knex('virtual_machine').del()

    const vms = Array.from({ length: 10 }, () => ({
        name: faker.book.title(),
        creator: faker.person.fullName(),
        descricao: faker.lorem.sentence(6),
    }))

    await knex('virtual_machine').insert(vms)
}