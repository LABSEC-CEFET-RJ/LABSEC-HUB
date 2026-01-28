import { UserPayload } from "../interfaces/user.interface";
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || ''

export const createToken = ({ id, email } : UserPayload) => {
    const token = jwt.sign(
        { id, email },
        secretKey,
        {
            expiresIn: '1d'
        }
    )

    return token
}