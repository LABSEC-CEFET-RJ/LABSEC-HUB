import { AdministratorDTO, UpdateAdministratorDTO } from "../types/administrator";
import DatabaseConnection from "../database/connection/databaseConnection";
import { UserNotFoundError, EmailInUseError, RootUpdateError } from "../errors/userErrors";
import AdminValidator from "../validators/adminValidator";

const database = DatabaseConnection.getInstance();

export default class AdminService {
    public static async createAdmin(data: AdministratorDTO) {
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

    public static async getAdmin(id: string): Promise<AdministratorDTO> {
        const admin = await database('admin').where({id}).first();

        if(!admin) {
            throw new UserNotFoundError();
        }
        return admin;
    }

    public static async getAllAdmins(): Promise<AdministratorDTO[]> {
        const admins = await database('admin').select('nickname', 'email');
        return admins;
    }

    public static async updateAdmin(id: string, data: UpdateAdministratorDTO) {
        await AdminValidator.validateUpdateAdmin(data);
        const admin = await AdminService.getAdmin(id);

        if(!admin) {
            throw new UserNotFoundError();
        }
        
        const isRoot = admin.email === process.env.ROOT_EMAIL;

        if(isRoot) {
            throw new RootUpdateError();
        }


        await database('admin').where({id}).first().update(data);
        return "Administrador atualizado";
    }

    public static async deleteAdmin(id: string) {
        const admin = await AdminService.getAdmin(id);

        if(admin.email === process.env.ROOT_EMAIL) {
            throw new RootUpdateError("O administrador root não pode ter sua conta removida");
        }

        if(!admin) {
            throw new UserNotFoundError();
        }

        await database('admin').where({id}).first().del();
        return "Administrador removido";
    }
}