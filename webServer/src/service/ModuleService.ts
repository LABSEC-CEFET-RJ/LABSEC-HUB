import knex from "@/database/knex"
import { HttpCode, HttpError } from "@/errors/error.config"
import { RequestModule, RequestModuleHasLesson, ResponseModule, ResponseModuleHasLesson } from "@/interfaces/module.interface"

export class ModuleService {
    
    private MODULE_COLUMNS = ['name', 'public_id', 'slug', 'desc', 'img']
    private MODULE_HAS_LESSON_COLUMNS = [ 'position' ]

    createModule = async (module: RequestModule) => {
        const [created] = await knex<ResponseModule>('module')
            .insert({
                ...module
            })
            .returning(this.MODULE_COLUMNS)

        return created
    }

    getAll = async () => {
        const modules = await knex<ResponseModule>('module')
                .select(this.MODULE_COLUMNS)
        return modules
    }

   getModuleById = async (moduleId: string) => {
        if (!moduleId) {
            throw new HttpError({ message: 'ID inválido', status: HttpCode.NOT_FOUND })
        }

        const [module] = await knex('module')
            .where({ public_id: moduleId })
            .returning(this.MODULE_COLUMNS)

        if (!module) {
            throw new HttpError({ message: 'Erro ao buscar módulo', status: HttpCode.INTERNAL_SERVER_ERROR })
        }

        return module
   }

   updateModule = async (
        moduleId: string,
        name?: string,
        slug?: string,
        desc?: string,
        img?: string
   ) => {
        if (!moduleId) {
            throw new HttpError({ message: 'ID inválido', status: HttpCode.NOT_FOUND })
        }

        const [module] = await knex<ResponseModule>('module')
            .where({ public_id: moduleId })
            .update({
                name,
                desc,
                slug,
                img
            })
            .returning(this.MODULE_COLUMNS)
        
        if (!module) {
            throw new HttpError({ message: 'Erro ao atualizar módulo', status: HttpCode.INTERNAL_SERVER_ERROR })
        }

        return module
   }

   deleteModule = async (moduleId: string) => {
        if (!moduleId) {
            throw new HttpError({ message: 'ID inválido', status: HttpCode.NOT_FOUND })
        }

        const [module] = await knex('module')
            .where({ public_id: moduleId })
            .del()
            .returning(this.MODULE_COLUMNS)

        if (!module) {
            throw new HttpError({ message: 'Erro ao deletar módulo', status: HttpCode.INTERNAL_SERVER_ERROR })
        }
   }


   /* Module has Lesson */

   createLesson = async (moduleLesson: RequestModuleHasLesson) => {
        const [created] = await knex<ResponseModuleHasLesson>('lesson_module')
            .insert({
                ...moduleLesson
            })
            .returning(this.MODULE_HAS_LESSON_COLUMNS)

        return created
   }

   
    getLessonById = async (lessonId: string) => {
            if (!lessonId) {
            throw new HttpError({ message: 'ID inválido', status: HttpCode.NOT_FOUND })
        }

        const [lesson] = await knex<RequestModuleHasLesson>('lesson_module')
            .where({ lesson_id: lessonId })
            .returning(this.MODULE_HAS_LESSON_COLUMNS)

        if (!lesson) {
            throw new HttpError({ message: 'Erro ao buscar lição', status: HttpCode.INTERNAL_SERVER_ERROR })
        }

        return lesson
   
    }

    updateLesson = async (lessonId: string, position?: string) => {
        if (!lessonId) {
            throw new HttpError({ message: 'ID inválido', status: HttpCode.NOT_FOUND })
        }

        const [lesson] = await knex<RequestModuleHasLesson>('lesson_module')
            .where({ lesson_id: lessonId })
            .update({
                position
            })
            .returning(this.MODULE_HAS_LESSON_COLUMNS)
        
        if (!lesson) {
            throw new HttpError({ message: 'Erro ao atualizar lição', status: HttpCode.INTERNAL_SERVER_ERROR })
        }

        return lesson
    }

    deleteLesson = async (lessonId: string) => {
        if (!lessonId) {
            throw new HttpError({ message: 'ID inválido', status: HttpCode.NOT_FOUND })
        }

        const [lesson] = await knex<RequestModuleHasLesson>('lesson_module')
            .where({ lesson_id: lessonId })
            .del()
            .returning(this.MODULE_HAS_LESSON_COLUMNS)

        if (!lesson) {
            throw new HttpError({ message: 'Erro ao deletar lição', status: HttpCode.INTERNAL_SERVER_ERROR })
        }     
    }

}