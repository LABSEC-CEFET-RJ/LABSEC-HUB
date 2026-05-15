const { faker } = require('@faker-js/faker')

exports.seed = async function (knex) {

    await knex('lesson').del()

    const users = await knex('user').select('id')

    const lessons = Array.from({ length: 10 })
        .map(() => {
            const randomUser = faker.helpers.arrayElement(users)
            const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

            return {
                slug: faker.helpers.slugify(faker.commerce.department() + randomHex).toLocaleLowerCase(),
                title: faker.commerce.department().slice(0, 45),
                subtitle: faker.commerce.productDescription(),
                body: faker.commerce.productDescription(),
                created_by: randomUser.id,
                updated_by: randomUser.id
            }
        })
    
    await knex('lesson').insert(lessons)
}