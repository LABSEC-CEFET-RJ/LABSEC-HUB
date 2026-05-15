import { InferType } from "yup";
import { createUserYupSchema, updateUserYupSchema } from "../validators/userValidator";

export type CreateUserDTO = InferType<typeof createUserYupSchema>
export type UpdateUserDTO = InferType<typeof updateUserYupSchema>
