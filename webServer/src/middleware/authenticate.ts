import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../interfaces/user.interface";

export interface AuthenticatedUserRequest extends Request {
    user: UserPayload
}

const secretKey = process.env.JWT_SECRET
export class AuthMiddleware {

    public static ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

        const header = req.headers.authorization
        const token = header && header.split(' ')[1]

        if(!token) {
            return res.status(401).send()
        }

        try {
            if(secretKey){
                const payload = verify(token, secretKey) as UserPayload
                if (!payload.id || !payload.email || !payload.points){
                return res.status(500).send()
            }

            (req as AuthenticatedUserRequest).user = payload
            next()
            }

        } catch (error) {
            res.status(403).send()
        }
    }

    /**
   * @method ensureAdmin
   * @description Verifica se o usuário é administrador.
   */
    public static ensureAdmin(req: AuthenticatedUserRequest, res: Response, next: NextFunction): any {
        try {
        AuthMiddleware.ensureAuthenticated(req, res, () => {
            if (!req.user?.admin) {
            throw new Error("Acesso negado. Permissão de administrador necessária.");
            }
            
            return next();
        });
        } catch (error) {
            next(error)
        }
    }

    /**
   * @method authorizeRoot
   * @description Verifica se é o email do root.
   */
    public static authorizeRoot(req: AuthenticatedUserRequest, res: Response, next: NextFunction): any {
        AuthMiddleware.ensureAdmin(req, res, ()=>{
        try {

            if (req.user?.email != process.env.ROOT_EMAIL) {
            throw new Error("Acesso negado. Permissão de super-usuário necessária.");
            }
            
            return next();
    
        } catch (error) {
            next(error);
        }
        });
    }
}







