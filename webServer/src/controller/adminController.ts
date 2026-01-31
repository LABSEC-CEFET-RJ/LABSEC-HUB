import { NextFunction, Request, Response } from "express";
import AdminService from "../service/adminService";
import { HttpCode } from "../errors/error.config";
import { AdministratorDTO, UpdateAdministratorDTO } from "../types/administrator";

export default class AdminController {
    public static async createAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const { nickname, email, password } = req.body;
            const data: AdministratorDTO = {
                nickname,
                email,
                password
            };
            await AdminService.createAdmin(data);

            return res.status(HttpCode.CREATED)
        } catch(error) {
            next(error)
        }
    }

    public static async getAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.body;
            const admin = await AdminService.getAdmin(id);

            return res.status(HttpCode.OK).json(admin);
        } catch (error) {
            next(error)
        }
    }

    public static async getAllAdmins(req: Request, res: Response, next: NextFunction) {
        try {
            const admins = await AdminService.getAllAdmins();
            return res.status(HttpCode.OK).json(admins);
        } catch(error) {
            next(error)
        }
    }

    public static async updateAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, nickname, password } = req.body;
            const data: UpdateAdministratorDTO = {
                nickname,
                password
            };
            await AdminService.updateAdmin(id, data);

            return res.status(HttpCode.OK);
        } catch(error) {
            next(error);
        }
    }

    public static async deleteAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.body;

            await AdminService.deleteAdmin(id);

            return res.status(HttpCode.OK);
        } catch(error) {
            next(error);
        }
    }
}