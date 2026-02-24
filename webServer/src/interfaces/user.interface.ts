import { type JwtPayload  } from "jsonwebtoken";


export interface UserPayload extends JwtPayload {
    public_id: string,
    email: string;
    nickname: string;
    admin: boolean;
}


export interface LoginUser {
    email: string;
    password: string;
}