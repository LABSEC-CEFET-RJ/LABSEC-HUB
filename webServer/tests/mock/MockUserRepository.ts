
export class MockUserRepository {

    knex

    constructor(knex: any){
        this.knex = knex
    }

    async findByEmail() {
        const user = await this.knex('user')
            .select('id', 'email', 'password', 'created_at as createdAt')
            .where()
            .first()    

            return user
        }
}