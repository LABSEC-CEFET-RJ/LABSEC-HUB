import { Request, Response } from "express";
import { LessonService } from "@/service/lessonService";
import { HttpCode } from "@/errors/error.config";
import { Lesson , LessonPartial } from "@/interfaces/lesson.interface";

export class LessonController  {
        
    private readonly lessonService = new LessonService()

    CreateLesson = async (req: Request, res: Response) => {
        try {
            const lesson: LessonPartial = req.body as LessonPartial
            const date: Date = new Date();
            const user_public_id = req.user?.public_id
            const payload  = {...lesson, created_at: date, updated_at : date  }
            const result = await this.lessonService.CreateLesson(payload, String(user_public_id));

            return res.status(HttpCode.CREATED).json({message: result});
            
        } catch (error: any) {
        return res.status(error.statusCode).json({message: error.message})
        }
    }


    GetLesson = async (req: Request, res: Response) => {
        try {
            const { public_id } = req.params; 
            const result = await this.lessonService.GetLesson(String(public_id));

            return res.status(HttpCode.OK).json({message: result});
            
        } catch (error: any) {
        return res.status(error.statusCode).json({message: error.message})
        }
    }

    UpdateLesson = async (req: Request, res: Response) => {
        try {
            const { public_id } = req.params; 
            const lesson: LessonPartial = req.body as LessonPartial
            const date: Date = new Date();
            const user_public_id = req.user?.public_id
            const payload  = {...lesson, updated_at: date  }

            const result = await this.lessonService.UpdateLesson(payload, String(user_public_id), String(public_id) );

            return res.status(HttpCode.CREATED).json({message: result});
            
        } catch (error: any) {
        return res.status(error.statusCode).json({message: error.message})
        }
    }

    DeleteLesson = async (req: Request, res: Response) => {
        try {
            const { public_id } = req.params; 
            const result = await this.lessonService.DeleteLesson(String(public_id));
            return res.status(HttpCode.CREATED).json({message: result});

        } catch (error: any) {
            return res.status(error.statusCode).json({message: error.message})
        }

    }

}
