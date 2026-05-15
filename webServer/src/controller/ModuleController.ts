import { HttpCode, HttpError } from "@/errors/error.config"
import { RequestModule, RequestModuleHasLesson } from "@/interfaces/module.interface"
import { UserPayload } from "@/interfaces/user.interface"
import { ModuleService } from "@/service/ModuleService"
import { Request, Response } from "express"

/**
 * @description Controller para lidar com as requisições relacionadas aos módulos de aprendizado.
 * @author marco_pcg
 * @date 05/03/2026
 */
export class ModuleController {

    private readonly moduleService = new ModuleService()

    createModule = async (req: Request, res: Response) => {
        try {
            const { name, slug, desc, img } = req.body as RequestModule
            const module = await this.moduleService.createModule({name, slug, desc, img})

            return res.json({ module })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const modules = await this.moduleService.getAll()
            return res.json({ modules })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    getModuleById = async (req: Request, res: Response) => {
        try {
            const { moduleId } = req.params
            const modules = await this.moduleService.getModuleById(moduleId as string)
            return res.json({ modules })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    updateModule = async (req: Request, res: Response) => {
        try {
            const { moduleId } = req.params
            const module = (req.body as Partial<RequestModule>)
            const updated = await this.moduleService.updateModule(
                moduleId as string, 
                module.name,
                module.slug,
                module.desc,
                module.img
            )

            return res.status(HttpCode.OK).send({ module: updated })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    deleteModule = async (req: Request, res: Response) => {
        try {
            const { moduleId } = req.params
            await this.moduleService.deleteModule(moduleId as string)

            return res.status(HttpCode.OK).send({ message: "Módulo deletado com sucesso"})
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    /*  Module has Lesson */

    createLesson = async (req: Request, res: Response) => {
         try {
            const { position } = req.body
            const { moduleId, lessonId } = req.params as { moduleId: string, lessonId: string }
            const lessonModule: RequestModuleHasLesson = { position, module_id: moduleId, lesson_id: lessonId }

            const lesson = await this.moduleService.createLesson(lessonModule)
            return res.json({ lesson })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    getLessonById = async (req: Request, res: Response) => {
        try {
            const { lessonId } = req.params
            const lessons = await this.moduleService.getLessonById(lessonId as string)
            return res.json({ lessons })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    updateLesson = async (req: Request, res: Response) => {
        try {
            const { lessonId } = req.params
            const lesson = (req.body as Partial<RequestModuleHasLesson>)
            const updated = await this.moduleService.updateLesson(
                lessonId as string, 
                lesson.position
            )

            return res.status(HttpCode.OK).send({ lesson: updated })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    deleteLesson = async (req: Request, res: Response) => {
        try {
            const { lessonId } = req.params
            await this.moduleService.deleteLesson(lessonId as string)

            return res.status(HttpCode.OK).send({ message: "Lição removida do módulo com sucesso"})
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
}