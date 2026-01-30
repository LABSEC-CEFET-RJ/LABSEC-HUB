import type { LoginUserDTO, UserPayload } from "../../src/interfaces/user.interface.ts";
import { createToken as signJwtToken } from "../../src/lib/jwt.ts";
import * as bcrypt from 'bcrypt'
import { MockUserRepository } from "./MockUserRepository.ts";

export class MockAuthService {

    userRepository

    constructor(mockUserRepository: MockUserRepository) {
        this.userRepository = mockUserRepository
    }

    async login(user: LoginUserDTO) {
        try {

            const userLogin = await this.userRepository.findByEmail()

            if (!userLogin) throw new Error('couldn\'t find user')

            const matchPassword = await bcrypt.compare(
                user.password,
                userLogin.password
            )
            
            if (!matchPassword) throw new Error('passwords doesn\'t match')
            
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
        } catch(error: Error | any) {
            throw new Error(error.message)
        }
    }

}