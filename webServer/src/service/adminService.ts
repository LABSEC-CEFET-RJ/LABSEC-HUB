import DatabaseConnection from "../database/connection/databaseConnection";
import { EmailInUseError, RootDeleteError, RootUpdateError, UserNotFoundError } from "../errors/userErrors";
import { CreateUserDTO, UpdateUserDTO } from "../types/user";
import { AdminValidator } from "../validators/userValidator";
import bcrypt from 'bcrypt'

const database = DatabaseConnection.getInstance();

const saltRounds = process.env.SALT_ROUNDS ?? 10

export class AdminService {
    private readonly validator = new AdminValidator();

    public async createAdmin(data: CreateUserDTO) {
        await this.validator.validateCreateAdmin(data);

        const emailExistsInDatabase = await database('user')
            .where({ email: data.email })
            .first();

        if (emailExistsInDatabase) {
            throw new EmailInUseError();
        }

        const hashedPassword = await bcrypt.hash(data.password, saltRounds)

        const result = await database('user')
            .insert({
                ...data,
                password: hashedPassword,
                isadmin: '1'
            })
            .returning(['public_id', 'nickname'])

        return result[0]
    }

    public async getAdminByPublicId(public_id: string) {
        const admin = await database('user').where({ public_id, isadmin: '1' }).first()

        if (!admin) {
            throw new UserNotFoundError();
        }
        return admin;
    }

    public async getAllAdmins() {
        const admins = await database('user').select().where({ isadmin: '1' });
        return admins;
    }

    public async updateAdmin(public_id: string, data: UpdateUserDTO) {
        await this.validator.validateUpdateAdmin(data);
        const admin = await this.getAdminByPublicId(public_id);

        if (!admin) {
            throw new UserNotFoundError();
        }

        const isRoot = admin.email === process.env.ROOT_EMAIL;
        if (isRoot) {
            throw new RootUpdateError();
        }

        const result = await database('user')
            .where({ public_id, isadmin: '1' })
            .first()
            .update({
                ...data,
                ...(data.password && { password: await bcrypt.hash(data.password, saltRounds) })
            })
            .returning('*');
        return result[0];
    }

    public async deleteAdmin(public_id: string) {
        const admin = await this.getAdminByPublicId(public_id);
        if (!admin) {
            throw new UserNotFoundError()
        }

        const isRoot = admin.email === process.env.ROOT_EMAIL;
        if (isRoot) {
            throw new RootDeleteError();
        }

        const result = await database('user').where({ public_id, 'isadmin': '1' }).first().del().returning(['public_id', 'nickname']);
        return result[0];
    }
}
