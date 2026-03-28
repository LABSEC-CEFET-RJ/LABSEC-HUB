import { Lesson, LessonPartial } from "@/interfaces/lesson.interface";
import knexInstance from "../database/knex.ts";




export class LessonService  {

    CreateLesson = async (payload: LessonPartial, user_public_id: string) => {

        try {
            const user = await knexInstance("user").select("id").where({ public_id: user_public_id }).first()
            const lesson = {...payload , created_by: user.id , updated_by: user.id }
            await knexInstance("lesson").insert(lesson)
            return "Cadastrado com sucesso"

        } catch (error: any) {
            console.error("Mensagem:", error.message);
                throw error;
        }
    }

    GetLesson = async (public_id: string) => {
        try {
            const lessonDb = await knexInstance("lesson").select("*").where({ public_id: public_id }).first()
            if (!lessonDb) {
                throw new Error("Lesson não encontrada");
            }
            var user, userUpdate
            if(lessonDb.created_by === lessonDb.updated_by ){
                user = await knexInstance("user").select("nickname").where({ id: lessonDb.created_by }).first()
                userUpdate = user
            }else{
                user = await knexInstance("user").select("nickname").where({ id: lessonDb.created_by }).first()
                userUpdate = await knexInstance("user").select("nickname").where({ id: lessonDb.updated_by }).first()
            }
            
            const lesson: Lesson = {...lessonDb ,  created_by: user.nickname , updated_by: userUpdate.nickname}
            return lesson
        } catch (error: any) {
            console.error("Mensagem:", error.message);
                throw error;
        }
        
    }

    UpdateLesson = async (payload: LessonPartial, user_public_id: string,  public_id: string) => {

        try {
            const user = await knexInstance("user").select("id").where({ public_id: user_public_id }).first()
            const lesson = {...payload , updated_by: user.id }
            await knexInstance("lesson").where({ public_id: public_id }).update(lesson); 
            return "Atualizado com sucesso"

        } catch (error: any) {
            console.error("Mensagem:", error.message);
                throw error;
        }
    }

}
