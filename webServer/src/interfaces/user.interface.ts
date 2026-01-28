import { JwtPayload } from "jsonwebtoken";

export interface UserPayload extends JwtPayload {
    id: string;
    email: string;
}