import { AppError } from "@/interfaces/errors/AppError"
import { UserPayload } from "@/interfaces/user.interface"
import { VMService } from "@/service/VMService"
import { Request, Response } from "express"

/**
 * @description Controller para lidar com as requisições relacionadas às máquinas virtuais.
 * @author marco_pcg
 * @date 05/03/2026
 */
export class VMController {

    static create = async (req: Request, res: Response) => {
        try {
            const { name, creator, description } = req.body
            const result = await VMService.create(name, creator, description)

            return res.json({ vm: result })
        } catch (error: any) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            return res.status(500).json({ error: error.message || 'Internal Server Error' })
        }
    }

    static checkIsActive = async (req: Request, res: Response) => {
        try {
            const { vmId } = req.body
            const userId = (req.user as UserPayload).id
            const result = await VMService.checkIsActive(vmId, userId)

            return res.json({ isActive: result})
        } catch (error: any) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            return res.status(500).json({ error: error.message || 'Internal Server Error' })
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const vms = await VMService.getAll()
            return res.json({ vms })
        } catch (error: any) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            return res.status(500).json({ error: error.message || 'Internal Server Error' })
        }
    }
}