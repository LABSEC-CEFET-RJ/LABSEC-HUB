import { AppError } from '@/interfaces/errors/AppError'
import knex from '../database/knex'

export class VMService {

    static create = async (name: string, creator: string, description: string) => {
        try {
            
            const [vm] = await knex('virtual_machine').insert({
                name,
                creator,
                'descricao': description
            }).returning('*')

            return vm
        } catch (error) {
            console.error("Erro ao criar máquina virtual:", error)
            throw new AppError("Erro ao criar máquina virtual", 500)
        }
    }

    static checkIsActive = async (vmId: string, userId: string) => {
        try {
            
            const [isActive] = await knex('is_vm_active').insert({ 
                virtual_machine_id: vmId, 
                user_id: userId 
            }).returning('*')

            if(isActive){
                return true
            }
            return false
        } catch (error: any) {
            throw new AppError(error.message || "Erro ao verificar status da máquina virtual", 500)
        }
    }

    static getAll = async () => {
        try {
            const vms = await knex('virtual_machine').select('*')
            return vms
        } catch (error: any) {
            throw new AppError(error.message || "Erro ao buscar máquinas virtuais", 500)
        }
    }
}