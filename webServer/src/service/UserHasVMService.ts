import knex from "@/database/knex"
import { AppError } from "@/interfaces/errors/AppError"


export class UserHasVMService {
    static create = async (vmId: string, userId: string) => {
        try {
            const [userVm] = await knex('is_vm_active').insert({
                virtual_machine_id: vmId,
                user_id: userId
            }).returning('*')

            return userVm
        } catch (error: any) {
            throw new AppError(error.message || "Erro ao ligar o usuário à VM", 500)
        }
    }

    static checkIsActive = async (vmId: string, userId: string) => {
        try {
            const vm = await knex('is_vm_active')
                .select('*')
                .where({
                    virtual_machine_id: vmId,
                    user_id: userId
                })
            
            return vm.length ? true : false
        } catch (error: any) {
            throw new AppError(error.message || "Erro ao verificar se o usuário está ligado à VM", 500)
        }
    }

    static delete = async (vmId: string, userId: string) => {
        try {
            const count = await knex('is_vm_active')
                .where({
                    virtual_machine_id: vmId,
                    user_id: userId
                })
                .del()

            if (!count) {
                throw new AppError("O usuário não está ligado à VM", 400)
            }
        } catch (error: any) {
            if(!(error instanceof AppError)){
                throw new AppError(error.message || "Erro ao desligar o usuário da VM", 500)
            }

            throw error
        }
    }
}