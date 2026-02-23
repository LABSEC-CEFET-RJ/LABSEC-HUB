import { type JwtPayload  } from "jsonwebtoken";


export interface UserPayload extends JwtPayload {
    public_id: string,
    email: string;
    nickname: string;
    admin: boolean;
}

export interface User {
    public_id: string;
    email: string;
    password: string;
    points: number;
    nickname: string;
}

export interface LoginUser {
    email: string;
    password: string;
}