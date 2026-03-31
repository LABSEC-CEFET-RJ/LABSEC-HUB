import { Request, Response } from "express";
import  {AuthService}  from "../service/AuthService.ts";
import { HttpCode, HttpError } from "@/errors/error.config.ts";

export class AuthController  {
    private readonly authService = new AuthService()


    login = async (req: Request, res: Response) => {        
        try{
            const { email, password } = req.body
            const result = await this.authService.login(email, password );

            return res.json(result)
        } catch(error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ message: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: error.message || 'Internal Server Error' })
        }
    }
}