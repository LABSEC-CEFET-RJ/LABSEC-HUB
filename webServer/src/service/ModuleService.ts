import knex from "@/database/knex"
import { AppError } from "@/interfaces/errors/AppError"


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
            throw new AppError("Erro ao atualizar progresso do módulo", 500)
        }
    }
}