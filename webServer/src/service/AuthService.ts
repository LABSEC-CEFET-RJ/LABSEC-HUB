import { UserPayload } from "../interfaces/user.interface.ts";
import { createToken as signJwtToken } from "../lib/jwt.ts";
import * as bcrypt from 'bcrypt'
import knexInstance from "../database/knex.ts";
import { ResponseAuthUser } from "@/interfaces/auth.interface.ts";
import { HttpCode, HttpError } from "@/errors/error.config.ts";

export class AuthService  {

    /**
     * @description Realiza Login.
     * @param {string} email - O email do usuário.
     * @param {string} password - A senha do usuário.
     * @returns {Promise<string>} O token JWT do usuário autenticado.
     */
    public async login(email: string, password: string) {

        try {
            const user = await knexInstance<ResponseAuthUser>('user')
                .select('*')
                .where({ email }).first()    
            
            if (!user) throw new HttpError({ message: 'invalid credentials', status: HttpCode.UNAUTHORIZED})
            
            const matchPassword = await bcrypt.compare(
                password, 
                user.password
            )

            if (!matchPassword) throw new HttpError({ status: HttpCode.UNAUTHORIZED, message: 'invalid credentials'})            
            
            const userPayload: UserPayload = {
                id: user.id,
                public_id: user.public_id,
                email: user.email,
                nickname: user.nickname,
                admin: Boolean(user.isadmin)
            }

            const token = signJwtToken(userPayload)

            return {token}
        } catch(error) {
            throw error
        }
    }

}