import { Request, Response } from "express";
import  {AuthService}  from "../service/AuthService.ts";
import { AppError } from "@/interfaces/errors/AppError.ts";

export class AuthController  {
    private readonly authService = new AuthService()


    login = async (req: Request, res: Response) => {        
        try{
            const { email, password } = req.body
            const result = await this.authService.login(email, password );

            return res.json(result)
        } catch(error: any) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message })
            }
            return res.status(500).json({ message: error.message || 'Internal Server Error' })
        }
    }
}