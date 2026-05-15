import { Request, Response } from "express";
import { UserService } from "@/service/UserService";
import { HttpCode, HttpError } from "@/errors/error.config";

export class UserController  {

    private readonly UserService = new UserService()

    saveLesson = async (req: Request, res: Response) => {
        try {
            const { lesson_public_id } = req.body
            const user_public_id = req.user?.public_id
            
            const response = await this.UserService.saveLesson(lesson_public_id, String(user_public_id));
            return res.status(HttpCode.CREATED).json({message: response});
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }

    }

    saveModule = async (req: Request, res: Response)=>{
        try{
            const { module_public_id } = req.body;
            const user_public_id = req.user?.public_id;

            if(!user_public_id || !module_public_id){
                return res.status(HttpCode.BAD_REQUEST).json({message: "Missing or wrong parameters"});
            }    
            const response = await this.UserService.saveModule(module_public_id, String(user_public_id));
            return res.status(HttpCode.CREATED).json({message: response});
        }catch(error:any){
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    saveCourse = async (req:Request, res:Response)=>{
        try{
            const { course_public_id } = req.body;
            const user_public_id = req.user?.public_id;
            if(!user_public_id || !course_public_id){
                return res.status(HttpCode.BAD_REQUEST).json({message: "Missing or wrong parameters"});
            }    
            const response = await this.UserService.saveCourse(course_public_id, String(user_public_id));
            return res.status(HttpCode.CREATED).json({message: response});
        }catch(err:any){
            return res.status(err.statusCode || 500).json({ message: err.message });

        }
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const { nickname, email, password } = req.body
            
            const response = await this.UserService.createUser(nickname, email, password);
            return res.status(HttpCode.CREATED).json({message: response});
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

}