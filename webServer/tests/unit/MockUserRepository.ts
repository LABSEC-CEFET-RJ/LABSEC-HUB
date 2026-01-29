
export class MockUserRepository {

    async findByEmail(knex: any) {
        const user = await knex('user')
            .select('id', 'email', 'password', 'created_at as createdAt')
            .where()
            .first()    

            return user
        }
}