import { type JwtPayload  } from "jsonwebtoken";


export interface UserPayload extends JwtPayload {
    id: string;
    public_id: string,
    email: string;
    nickname: string;
    admin: boolean;
}


export interface LoginUser {
    email: string;
    password: string;
}