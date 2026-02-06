import { type UserPayload } from "../interfaces/user.interface.ts";
import jwt from 'jsonwebtoken'
import "dotenv/config"

const secretKey = process.env.JWT_SECRET 
const expiresIn = process.env.JWT_EXPIRES_IN 



export const createToken = (payload : UserPayload) => {
    if (!secretKey) {
    throw new Error("JWT_SECRET is not defined")
    }

    if (!expiresIn) {
    throw new Error("JWT_EXPIRES_IN is not defined")
    }
    
    const token = jwt.sign(
        payload,
        secretKey,
        {
            expiresIn: expiresIn as jwt.SignOptions['expiresIn']
        }
    )

    return token
}