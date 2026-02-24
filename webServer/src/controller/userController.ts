import { Request, Response } from "express";
import { UserService } from "@/service/userService";
import { HttpCode } from "@/errors/error.config";
export class UserController  {
    private readonly UserService = new UserService()


    saveLesson = async (req: Request, res: Response) => {
        try {
        const { lesson_public_id } = req.body
        const user_public_id = req.user?.public_id
        const response = await this.UserService.saveLesson(lesson_public_id, String(user_public_id));
        return res.status(HttpCode.CREATED).json({message: response});
        } catch (error: any) {
            return res.status(error.statusCode).json({message: error.message})
        }

    }

    createUser = async (req: Request, res: Response) => {
        try {
        const { nickname } = req.body
        const { email } = req.body
        const { password } = req.body
        const response = await this.UserService.createUser(nickname, email, password);
        return res.status(HttpCode.CREATED).json({message: response});
        } catch (error: any) {
            const statusCode = error.statusCode || 500
            return res.status(statusCode).json({message: error.message || "Erro interno do servidor"})
        }

    }

}