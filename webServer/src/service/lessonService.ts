import { LessonPartial } from "@/interfaces/lesson.interface";
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

}
