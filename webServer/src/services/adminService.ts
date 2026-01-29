import { Administrator, UpdateAdministrator } from "../types/administrator";
import DatabaseConnection from "../database/connection/databaseConnection";
import { UserNotFoundError, EmailInUseError } from "../errors/userErrors";
import AdminValidator from "../validators/adminValidator";

const database = DatabaseConnection.getInstance();

export default class AdminService {
    public static async createAdmin(data: Administrator) {
        await AdminValidator.validateCreateAdmin(data);

        const emailExistsInAdminTable = await database('admin').where(data.email).first();
        const emailExistsInUserTable = await database('user').where(data.email).first();
        const emailExistsInDatabase = emailExistsInAdminTable || emailExistsInUserTable;

        if(emailExistsInDatabase) {
            throw new EmailInUseError();
        }

        await database('admin').insert(data);
        return "Administrador criado";
    }

    public static async getAdmin(id: string): Promise<Administrator> {
        const admin = await database('admin').where({id}).first();

        if(!admin) {
            throw new UserNotFoundError();
        }
        return admin;
    }

    public static async getAllAdmins(): Promise<Administrator[]> {
        const admins = await database('admin').select('*'); 
        return admins;
    }

    public static async updateAdmin(id: string, data: UpdateAdministrator) {
        await AdminValidator.validateUpdateAdmin(data);
        const admin = await AdminService.getAdmin(id);

        if(!admin) {
            throw new UserNotFoundError();
        }

        await database('admin').where({id}).first().update(data);
        return "Administrador atualizado";
    }

    public static async deleteAdmin(id: string) {
        const admin = await AdminService.getAdmin(id);

        if(!admin) {
            throw new UserNotFoundError();
        }

        await database('admin').where({id}).first().del();
        return "Administrador removido";
    }
}