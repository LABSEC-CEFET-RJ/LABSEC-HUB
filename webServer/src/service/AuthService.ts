import { UserPayload } from "../interfaces/user.interface.ts";
import { createToken as signJwtToken } from "../lib/jwt.ts";
import * as bcrypt from 'bcrypt'
import knexInstance from "../database/knex.ts";
import { HttpCode, HttpError } from "@/errors/error.config.ts";

export class AuthService  {

    

    /**
     * @description Realiza Login.
     * @param {string} email - O email do usuário.
     * @param {string} password - A senha do usuário.
     * @returns {Promise<string>}
     */
    public async login(email: string, password: string) {

        try {
            const user = await knexInstance('user').select('public_id', 'nickname', 'email', 'password', 'isadmin').where({ email }).first()    
         

            if (!user) throw new HttpError({ message: 'invalid credentials', status: HttpCode.UNAUTHORIZED })
            
            const matchPassword = await bcrypt.compare(
                password, 
                user.password
            )

            if (!matchPassword) throw new HttpError({ message: 'invalid credentials', status: HttpCode.FORBIDDEN })

            const userPayload: UserPayload = {
                public_id: user.public_id,
                email: user.email,
                nickname: user.nickname,
                isadmin: user.isadmin
            }


            const token = signJwtToken(userPayload)

            return {token}
        } catch(error) {
            throw error
        }
    }

}
