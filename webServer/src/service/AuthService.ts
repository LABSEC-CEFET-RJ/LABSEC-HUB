import { AppError } from "@/interfaces/errors/AppError.ts";
import { LoginUserDTO, UserPayload } from "../interfaces/user.interface.ts";
import { createToken as signJwtToken } from "../lib/jwt.ts";
import { UserRepository } from "../repository/UserRepository.ts";
import * as bcrypt from 'bcrypt'

export class AuthService {

    userRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    async login(user: LoginUserDTO) {
        try {

            const userLogin = await this.userRepository.findByEmail(user.email)

            if (!userLogin) throw new AppError('invalid credentials', 404)

            const matchPassword = await bcrypt.compare(
                user.password, 
                userLogin.password
            )

            if (!matchPassword) throw new AppError('invalid credentials', 404)
            
            const userPayload = {
                email: userLogin.email,
                nickname: userLogin.nickname,
                points: userLogin.points
            }

            const token = signJwtToken(userPayload as UserPayload)

            return {
                token,
                user: {
                    id: userLogin.id,
                    email: userLogin.email,
                    points: userLogin.points
                }
            }
        } catch(error) {
            if (!(error instanceof AppError)){
                throw new AppError('db error', 500)
            }
        }
    }

}