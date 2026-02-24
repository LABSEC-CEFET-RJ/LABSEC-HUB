import { Request, Response } from "express";
import  {AuthService}  from "../service/authService.ts";

export class AuthController  {
    private readonly authService = new AuthService()


    login = async (req: Request, res: Response) => {        
        try{
            const { email, password } = req.body
            const result = await this.authService.login(email, password );

            return res.json(result)
        } catch(error: any) {
            console.error(error)
            throw error
        }
    }
}