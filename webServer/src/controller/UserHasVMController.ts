import { HttpCode, HttpError } from "@/errors/error.config"
import { UserHasVMService } from "@/service/UserHasVMService"
import { Request, Response } from "express"

export class UserHasVMController {

    private readonly service = new UserHasVMService()

    createVM = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params

            const created = await this.service.create(vmId as string, userId as string)
            return res.json({ created })
        } catch (error: any){
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    checkIsActive = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params
            const result = await this.service.checkIsActive(vmId as string, userId as string)

            return res.json({ isActive: result})
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    deleteVM = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params

            await this.service.delete(vmId as string, userId as string)
            return res.json(HttpCode.OK).send()
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
}