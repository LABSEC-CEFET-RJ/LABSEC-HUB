import { Request, Response } from "express";
import { AuthService } from "../service/AuthService.ts";
import { AppError } from "@/interfaces/errors/AppError.ts";

export class AuthController {

    authService

    constructor(){
        this.authService = new AuthService()
    }

    async login(req: Request, res: Response) {
        try{
            const { email, password } = req.body

            const result = await this.authService.login(
                { email, password }
            );

            return res.json(result)
        } catch(error: AppError | any) {
            return res.status(error.statusCode).json({
                error: error.message
            })
        }
    }
}