import knex from "@/database/knex"
import { HttpCode, HttpError } from "@/errors/error.config"

export class UserHasVMService {
    static create = async (vmId: string, userId: string) => {
        try {
            const [userVm] = await knex('is_vm_active').insert({
                virtual_machine_id: vmId,
                user_id: userId
            }).returning('*')

            return userVm
        } catch (error: any) {
            throw new HttpError({ message: error.message || "Erro ao ligar o usuário à VM", status: HttpCode.INTERNAL_SERVER_ERROR})
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
            throw new HttpError({ message: error.message || "Erro ao verificar se o usuário está ligado à VM", status: HttpCode.INTERNAL_SERVER_ERROR})
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
                throw new HttpError({ message: "O usuário não está ligado à VM", status: HttpCode.NOT_FOUND})
            }
        } catch (error: any) {
            throw error
        }
    }
}