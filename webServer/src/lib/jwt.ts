import { type UserPayload } from "../interfaces/user.interface.ts";
import jwt from 'jsonwebtoken'
import "dotenv/config"

const secretKey = process.env.JWT_SECRET_KEY || 'supersecret'
const expiresIn = process.env.JWT_EXPIRES_IN || '15m'

export const createToken = (payload : UserPayload) => {
    const token = jwt.sign(
        payload,
        secretKey,
        {
            expiresIn: expiresIn as jwt.SignOptions['expiresIn']
        }
    )

    return token
}