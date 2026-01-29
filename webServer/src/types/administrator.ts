import { InferType } from "yup";
import { createAdminYupSchema, updateAdminYupSchema } from "../validators/adminValidator";

export type Administrator = InferType<typeof createAdminYupSchema>
export type UpdateAdministrator = InferType<typeof updateAdminYupSchema>