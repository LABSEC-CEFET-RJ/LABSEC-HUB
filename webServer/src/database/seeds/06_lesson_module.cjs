const { faker } = require('@faker-js/faker')

exports.seed = async function (knex) {

    await knex('lesson_module').del()

    const modules = await knex('module')
        .select('id')
        .limit(10)
    
    const lessons = await knex('lesson')
        .select('id')
        .limit(10)

    for(let i = 0; i < modules.length; i++) {
        for(let j = 0; j < lessons.length; j++) {
            await knex('lesson_module').insert({
                lesson_id: lessons[j].id,
                module_id: modules[i].id,
                position: faker.number.int({ min: 1, max: 999999 })
            })
        }
    }
}