import { HttpCode, HttpError } from "@/errors/error.config"
import { UserHasVMService } from "@/service/UserHasVMService"
import { Request, Response } from "express"

export class UserHasVMController {

    static createVM = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params

            const userVm = await UserHasVMService.create(vmId as string, userId as string)
            return res.json({ vm: userVm })
        } catch (error: any){
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    static checkIsActive = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params
            const result = await UserHasVMService.checkIsActive(vmId as string, userId as string)

            return res.json({ isActive: result})
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    static deleteVM = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params

            await UserHasVMService.delete(vmId as string, userId as string)
            return res.json(HttpCode.OK).send()
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
}