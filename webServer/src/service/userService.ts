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

    saveModule = async (module_public_id: string, user_public_id: string) =>{
        const module = await knexInstance("module").select("id").where({ public_id: module_public_id }).first();
        if(!module){
            throw new AppError("Module not found",404)
        }
        const user = await knexInstance("user").select("id").where({ public_id: user_public_id }).first();
        if (!user) {
            throw new AppError("User not found",404);
        }

        const exists = await knexInstance("module_progress").where({ module_id: module.id, user_id: user.id}).first();
        if(exists){
            return "Progress already saved!";
        }
        await knexInstance("module_progress").insert({
            module_id: module.id,
            user_id: user.id,
            created_at: knexInstance.fn.now()
        });
        return "Progress saved successfully! First Instance of save";
    }

    saveCourse = async (course_public_id: string, user_public_id: string) =>{
        const course = await knexInstance("course").select("id").where({ public_id: course_public_id }).first();
        if(!course){
            throw new AppError("Course not found",404)
        }
        const user = await knexInstance("user").select("id").where({ public_id: user_public_id }).first();
        if (!user) {
            throw new AppError("User not found",404);
        }

        const exists = await knexInstance("course_progress").where({ course_id: course.id, user_id: user.id}).first();
        if(exists){
            return "Progress already saved!";
        }
        await knexInstance("course_progress").insert({
            course_id: course.id,
            user_id: user.id,
            created_at: knexInstance.fn.now()
        });
        return "Course progress saved successfully! First Instance of save";
    }

    wakeVMInstance = async (virtual_machine_public_id: string, user_public_id: string) => {
        const vmInstance = await knexInstance("virtual_machine").select("id").where({ public_id: virtual_machine_public_id }).first();
        if (!vmInstance) {
            throw new AppError("Virtual Machine not found",404)
        }
        const user = await knexInstance("user").select("id").where({ public_id: user_public_id }).first();
        if (!user) {
            throw new AppError("User not found",404);
        }
        const exists = await knexInstance("is_vm_active").where({ virtual_machine_id: vmInstance.id, user_id: user.id}).first();
        if(exists){
            return "VM is active!";
        }
        await knexInstance("is_vm_active").insert({
            virtual_machine_id: vmInstance.id,
            user_id: user.id,
            created_at: knexInstance.fn.now()
        });
        return "VM instance woken up successfully! Up and running!";
    }
    createUser = async (nickname: string, email: string, password: string) => {

        const user = await knexInstance("user").select("public_id").where({ email: email }).first()
        if (user) {
        return "Email já cadastrado"
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

        await knexInstance("user").insert({
            nickname: nickname,
            email: email,
            password: hashedPassword
        })

        return "Usuario criado com sucesso"
    }   

}