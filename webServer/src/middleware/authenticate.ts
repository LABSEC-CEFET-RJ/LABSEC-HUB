import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../interfaces/user.interface";

export interface AuthenticatedUserRequest extends Request {
    user: UserPayload
}

const secretKey = process.env.JWT_SECRET

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers.authorization
    const token = header && header.split(' ')[1]

    if(!token) {
        return res.status(401).send()
    }

    try {
        if(secretKey){
            const payload = verify(token, secretKey) as UserPayload
            if (!payload.id || !payload.email || !payload.points){
            return res.status(500).send()
        }

        (req as AuthenticatedUserRequest).user = payload
        next()
        }

    } catch (error) {
        res.status(403).send()
    }
}