import { type JwtPayload  } from "jsonwebtoken";


export interface UserPayload extends JwtPayload {
    email: string;
    nickname: string;
    points: number;
}

export interface User {
    id: string;
    email: string;
    password: string;
    points: number;
    nickname: string;
}

export interface LoginUser {
    email: string;
    password: string;
}