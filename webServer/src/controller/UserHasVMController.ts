import { AppError } from "@/interfaces/errors/AppError"
import { UserPayload } from "@/interfaces/user.interface"
import { UserHasVMService } from "@/service/UserHasVMService"
import { Request, Response } from "express"

export class UserHasVMController {

    static createVM = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params

            const userVm = await UserHasVMService.create(vmId as string, userId as string)
            return res.json({ vm: userVm })
        } catch (error: any){
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            return res.status(500).json({ error: error.message || 'Internal Server Error' })
        }
    }

    static checkIsActive = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params
            const result = await UserHasVMService.checkIsActive(vmId as string, userId as string)

            return res.json({ isActive: result})
        } catch (error: any) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            return res.status(500).json({ error: error.message || 'Internal Server Error' })
        }
    }

    static deleteVM = async (req: Request, res: Response) => {
        try {
            const { vmId, userId } = req.params

            await UserHasVMService.delete(vmId as string, userId as string)
            return res.json(200).send()
        } catch (error: any) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            return res.status(500).json({ error: error.message || 'Internal Server Error' })
        }
    }
}