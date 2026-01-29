import { UserPayload } from "../interfaces/user.interface";
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || ''
const expiresIn = process.env.JWT_EXPIRES_IN || '15m'

export const createToken = (payload : UserPayload) => {
    const token = jwt.sign(
        payload,
        secretKey,
        {
            expiresIn: Number(expiresIn)
        }
    )

    return token
}