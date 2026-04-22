import knex from '../database/knex'
import { ResponseVM } from '@/interfaces/vm.interface'
import { HttpCode, HttpError } from '@/errors/error.config'

export class VMService {

    private VM_COLUMNS = ['name', 'public_id', 'descricao', 'creator']

    create = async (name: string, creator: string, description: string) => {
        try {
            
            const [vm] = await knex<ResponseVM>('virtual_machine')
                .insert({
                    name,
                    creator,
                    descricao: description
                })
                .returning(this.VM_COLUMNS)

            return vm
        } catch (error) {
            throw new HttpError({ message: "Erro ao criar máquina virtual", status:HttpCode.INTERNAL_SERVER_ERROR})
        }
    }

    getAll = async () => {
        try {
            const vms = await knex<ResponseVM>('virtual_machine')
                .select(this.VM_COLUMNS)
            return vms
        } catch (error: any) {
            throw new HttpError({ message: "Erro ao buscar máquinas virtuais", status: HttpCode.INTERNAL_SERVER_ERROR})
        }
    }

    update = async (
        vmId: string,
        name?: string,
        descricao?: string,
        creator?: string
    ) => {
        try {
            const [vm] = await knex<ResponseVM>('virtual_machine')
                .where({ public_id: vmId })
                .update({
                    name,
                    descricao,
                    creator
                })
                .returning(this.VM_COLUMNS)

            if (!vm) {
                throw new HttpError({ message: "Máquina virtual não encontrada", status: HttpCode.NOT_FOUND})
            }

            return vm
        } catch (error: any) {
            throw error
        }
    }

    delete = async (
        vmId: string
    ) => {
        try {
            const vm = await knex('virtual_machine')
                .where({ public_id: vmId })
                .del()
                .returning(this.VM_COLUMNS)

            if (!vm) {
                throw new HttpError({ message: "Máquina virtual não encontrada", status: HttpCode.NOT_FOUND})
            }
        } catch (error: any) {
            throw error
        }
    }
}