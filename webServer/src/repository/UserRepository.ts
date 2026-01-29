import knex from "../database/knex.ts"
import { type User } from "../interfaces/user.interface.ts"

export class UserRepository {

    async findAll() {

    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await knex('user')
            .select('id', 'email', 'password', 'created_at as createdAt')
            .where({ email })
            .first()    

            return user || null
        }
}