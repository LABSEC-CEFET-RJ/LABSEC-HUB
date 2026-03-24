import { AppError } from '@/interfaces/errors/AppError'
import knex from '../database/knex'

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
            console.error("Erro ao criar máquina virtual:", error)
            throw new AppError("Erro ao criar máquina virtual", 500)
        }
    }

    static getAll = async (): Promise<ResponseVM[]> => {
        try {
            const vms = await knex<ResponseVM>('virtual_machine').select('*')
            return vms
        } catch (error: any) {
            throw new AppError(error.message || "Erro ao buscar máquinas virtuais", 500)
        }
    }
}