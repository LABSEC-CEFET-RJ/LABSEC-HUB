import * as Yup from "yup"

export const createUserYupSchema = Yup.object({
    nickname: Yup.string().required("O nome é obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: Yup.string().email().required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(8, "A senha deve ter pelo menos 8 caracteres")
})

export const updateUserYupSchema = Yup.object({
    nickname: Yup.string().optional(),
    email: Yup.string().email().optional(),
    password: Yup.string().optional()
})

export class AdminValidator {
    public async validateCreateAdmin(data: Yup.InferType<typeof createUserYupSchema>) {
        await createUserYupSchema.validate(data, { abortEarly: false })
    }
    public async validateUpdateAdmin(data: Yup.InferType<typeof updateUserYupSchema>) {
        await updateUserYupSchema.validate(data, { abortEarly: false })
    }
}