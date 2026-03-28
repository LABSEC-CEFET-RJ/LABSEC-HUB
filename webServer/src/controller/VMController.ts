import { HttpCode, HttpError } from "@/errors/error.config"
import { RequestVM } from "@/interfaces/vm.interface"
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
            const { name, description } = (req.body as RequestVM)
            const creator = req.user?.nickname || 'admin'
            const result = await VMService.create(name, creator, description)

            return res.json({ vm: result })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const vms = await VMService.getAll()
            return res.json({ vms })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    static update = async (req: Request, res: Response) => {
        try {
            const { vmId } = req.params
            const vm = (req.body as RequestVM)
            const updatedVm = await VMService.update(
                vmId as string, 
                vm.name, 
                vm.description
            )
            return res.status(HttpCode.OK).send({ vm: updatedVm })
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    static delete = async (req: Request, res: Response) => {
        try {
            const { vmId } = req.params
            const deletedVm = await VMService.delete(vmId as string)
            return res.status(HttpCode.OK).send()
        } catch (error: any) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message })
            }
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
}