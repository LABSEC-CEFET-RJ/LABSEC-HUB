import knexInstance from "@/database/knex";
import { AppError } from "@/interfaces/errors/AppError";
import bcrypt from "bcrypt"

export class UserService  {

    saveLesson = async (lesson_public_id: string, user_public_id: string) => {
            const lesson = await knexInstance("lesson").select("id").where({ public_id: lesson_public_id }).first()
        if (!lesson) {
            throw new AppError("lição não encontrada", 404)
        }

        const user = await knexInstance("user").select("id").where({ public_id: user_public_id }).first()
        if (!user) {
            throw new AppError("Usuário não encontrado",404)
        }

        const exists = await knexInstance("lesson_progress").where({ lesson_id: lesson.id, user_id: user.id}).first()

        if (exists) {
            return "Progresso já salvo"
        }

        await knexInstance("lesson_progress").insert({
            lesson_id: lesson.id,
            user_id: user.id,
            created_at: knexInstance.fn.now()
        })

        return "Progresso salvo com sucesso"
    }   


    createUser = async (nickname: string, email: string, password: string) => {

        const user = await knexInstance("user").select("public_id").where({ email: email }).first()
        if (user) {
        return "Email já cadastrado"
        }
        console.log(password)
        const hashedPassword = await bcrypt.hash(password, 10)

        await knexInstance("user").insert({
            nickname: nickname,
            email: email,
            password: hashedPassword
        })

        return "Usuario criado com sucesso"
    }   

}