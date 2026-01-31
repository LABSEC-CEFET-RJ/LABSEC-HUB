import { InferType } from "yup";
import { createAdminYupSchema, updateAdminYupSchema } from "../validators/adminValidator";

export type AdministratorDTO = InferType<typeof createAdminYupSchema>
export type UpdateAdministratorDTO = InferType<typeof updateAdminYupSchema>