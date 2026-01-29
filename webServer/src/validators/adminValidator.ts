import * as Yup from "yup"

export const createAdminYupSchema = Yup.object({
    nickname: Yup.string().required("O nome é obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: Yup.string().email().required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(8, "A senha deve ter pelo menos 8 caracteres")
})

export const updateAdminYupSchema = Yup.object({
    nickname: Yup.string().optional(),
    password: Yup.string().optional()
})

export default class AdminValidator {
    public static async validateCreateAdmin(data: Yup.InferType<typeof createAdminYupSchema>) {
        await createAdminYupSchema.validate(data, { abortEarly: false })
    }
    public static async validateUpdateAdmin(data: Yup.InferType<typeof updateAdminYupSchema>) {
        await updateAdminYupSchema.validate(data, { abortEarly: false })
    }
}