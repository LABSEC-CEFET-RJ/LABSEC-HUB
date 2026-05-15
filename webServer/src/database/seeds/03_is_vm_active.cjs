

exports.seed = async function (knex) {

    await knex('is_vm_active').del()

    const users = await knex('user')
        .select('id')
        .limit(10)
    
    const vms = await knex('virtual_machine')
        .select('id')
        .limit(10)

    for(let i = 0; i < users.length; i++) {
        for(let j = 0; j < vms.length; j++) {
            await knex('is_vm_active').insert({
                virtual_machine_id: vms[j].id,
                user_id: users[i].id,
            })
        }
    }
}