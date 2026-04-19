import { HttpCode, HttpError } from "@/errors/error.config"
import { UserPayload } from "@/interfaces/user.interface"
import { ModuleService } from "@/service/ModuleService"
import { Request, Response } from "express"

/**
 * @description Controller para lidar com as requisições relacionadas aos módulos de aprendizado.
 * @author marco_pcg
 * @date 05/03/2026
 */
export class ModuleController {

    static createModule = async (req: Request, res: Response) => {
        try {
            const { name, slug, desc, img } = req.body
            const result = await ModuleService.createModule(name, slug, desc, img)

            return res.json({ module: result })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    static saveProgress = async (req: Request, res: Response) => {
        try {
            const { moduleId } = req.body
            const userId = (req.user as UserPayload).id
            const result = await ModuleService.saveProgress(moduleId, userId)

            return res.json({ success: result })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
}