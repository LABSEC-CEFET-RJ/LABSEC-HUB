import knex from "@/database/knex"
import { HttpCode, HttpError } from "@/errors/error.config"

export class ModuleService {
    
    static createModule = async (name: string, slug: string, desc: string, img: string) => {
    }

    static saveProgress = async (moduleId: string, userId: string) => {
        try {
            await knex('module_progress').insert({
                module_id: moduleId,
                user_id: userId,
            })
        } catch (error) {
            throw new HttpError({ message: "Erro ao atualizar progresso do módulo", status: HttpCode.INTERNAL_SERVER_ERROR})
        }
    }
}