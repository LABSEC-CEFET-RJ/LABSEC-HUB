import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../interfaces/user.interface";

const secretKey = process.env.JWT_SECRET || ''

interface UserRequest extends Request {
    user: UserPayload
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers.authorization
    const token = header && header.split(' ')[1]

    if(!token) {
        return res.status(401).send()
    }

    try {
        const payload = verify(token, secretKey) as UserPayload

        if (!payload.id || !payload.email){
            return res.status(500).send()
        }

        (req as UserRequest).user = payload
        next()
    } catch (error) {
        res.status(403).send()
    }
}