import knex from '../database/knex'
import { ResponseVM } from '@/interfaces/vm.interface'
import { HttpCode, HttpError } from '@/errors/error.config'

export class VMService {

    static create = async (name: string, creator: string, description: string): Promise<ResponseVM> => {
        try {
            
            const [vm] = await knex<ResponseVM>('virtual_machine')
                .insert({
                    name,
                    creator,
                    'descricao': description
                })
                .returning('*')

            return vm
        } catch (error) {
            throw new HttpError({ message: "Erro ao criar máquina virtual", status:HttpCode.INTERNAL_SERVER_ERROR})
        }
    }

    static getAll = async (): Promise<ResponseVM[]> => {
        try {
            const vms = await knex<ResponseVM>('virtual_machine').select('*')
            return vms
        } catch (error: any) {
            throw new HttpError({ message: "Erro ao buscar máquinas virtuais", status: HttpCode.INTERNAL_SERVER_ERROR})
        }
    }

    static update = async (
        vmId: string,
        name?: string,
        description?: string
    ): Promise<ResponseVM | undefined> => {
        try {
            const [vm] = await knex<ResponseVM>('virtual_machine')
                .where({ public_id: vmId })
                .update({
                    name,
                    'descricao': description
                })
                .returning('*')

            if (!vm) {
                throw new HttpError({ message: "Máquina virtual não encontrada", status: HttpCode.NOT_FOUND})
            }

            return vm
        } catch (error: any) {
            throw error
        }
    }

    static delete = async (
        vmId: string
    ) => {
        try {
            const vm = await knex('virtual_machine')
                .where({ public_id: vmId })
                .del()

            if (!vm) {
                throw new HttpError({ message: "Máquina virtual não encontrada", status: HttpCode.NOT_FOUND})
            }
        } catch (error: any) {
            throw error
        }
    }
}