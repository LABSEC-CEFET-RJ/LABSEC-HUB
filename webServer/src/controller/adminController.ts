import { NextFunction, Request, Response } from "express";
import { AdminService } from "../service/adminService";
import { HttpCode } from "../errors/error.config";
import { CreateUserDTO, UpdateUserDTO } from "../types/user";

export class AdminController {
    private readonly service = new AdminService()

    public createAdmin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { nickname, email, password } = req.body;
            const data: CreateUserDTO = {
                nickname,
                email,
                password
            };
            const response = await this.service.createAdmin(data);

            return res.status(HttpCode.CREATED).json(response)
        } catch (error) {
            next(error)
        }
    }

    public getAdminByPublicId = async (req: Request<{ public_id: string }>, res: Response, next: NextFunction) => {
        try {
            const { public_id } = req.params
            const admin = await this.service.getAdminByPublicId(public_id);

            return res.status(HttpCode.OK).json(admin);
        } catch (error) {
            next(error)
        }
    }

    public getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const admins = await this.service.getAllAdmins();
            return res.status(HttpCode.OK).json(admins);
        } catch (error) {
            next(error)
        }
    }

    public updateAdmin = async (req: Request<{ public_id: string }>, res: Response, next: NextFunction) => {
        try {
            const { public_id } = req.params
            const { nickname, email, password } = req.body;
            const data: UpdateUserDTO = {
                nickname,
                email,
                password
            };
            const result = await this.service.updateAdmin(public_id, data);

            // ensure request completes; status() alone does not send a response body
            return res.status(HttpCode.OK).json(result);
        } catch (error) {
            next(error);
        }
    }

    public deleteAdmin = async (req: Request<{ public_id: string }>, res: Response, next: NextFunction) => {
        try {
            const { public_id } = req.params;

            const result = await this.service.deleteAdmin(public_id);

            return res.status(HttpCode.OK).json(result);
        } catch (error) {
            next(error);
        }
    }
}
