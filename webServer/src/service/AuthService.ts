import { AppError } from "@/interfaces/errors/AppError.ts";
import { UserPayload } from "../interfaces/user.interface.ts";
import { createToken as signJwtToken } from "../lib/jwt.ts";
import * as bcrypt from 'bcrypt'
import knexInstance from "../database/knex.ts";

export class AuthService  {

    

    /**
     * @description Realiza Login.
     * @param {string} email - O email do usuário.
     * @param {string} password - A senha do usuário.
     * @returns {Promise<string>}
     */
    public async login(email: string, password: string) {

        try {

            const user = await knexInstance('user').select('id', 'nickname', 'email', 'points', 'password').where({ email }).first()    
            
            if (!user) throw new AppError('invalid credentials', 401)
            
            const matchPassword = await bcrypt.compare(
                password, 
                user.password
            )

            if (!matchPassword) throw new AppError('invalid credentials', 401)
            
            const userPayload: UserPayload = {
                email: user.email,
                nickname: user.nickname,
                points: user.points
            }

            const token = signJwtToken(userPayload)

            return {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    points: user.points
                }
            }
        } catch(error) {
            throw error
        }
    }

}