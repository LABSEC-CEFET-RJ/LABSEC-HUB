import { LoginUserDTO, UserPayload } from "../interfaces/user.interface";
import { createToken as signJwtToken } from "../lib/jwt";
import { UserRepository } from "../repository/UserRepository";
import * as bcrypt from 'bcrypt'

export class AuthService {

    userRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    async login(user: LoginUserDTO) {
        try {

            const userLogin = await this.userRepository.findByEmail(user.email)

            if (!user) throw new Error('invalid credentials')

            const matchPassword = await bcrypt.compare(
                user.password, 
                userLogin.password
            )

            if (!matchPassword) throw new Error('invalid credentials')
            
            const userPayload = {
                email: userLogin.email,
                points: userLogin.number
            }

            const token = signJwtToken(userPayload)

            return {
                token,
                user: {
                    id: userLogin.id,
                    email: userLogin.email,
                    points: userLogin.points
                }
            }
        } catch(error) {
            throw new Error('user does not exist')
        }
    }

}