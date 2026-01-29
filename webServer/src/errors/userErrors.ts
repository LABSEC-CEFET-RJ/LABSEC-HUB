import { HttpCode, HttpError } from "./error.config";

export class UserNotFoundError extends HttpError {
    constructor() {
        super({
            status: HttpCode.NOT_FOUND,
            message: "Usuário não encontrado"
        })
    }
}

export class EmailInUseError extends HttpError {
    constructor() {
        super({
            status: HttpCode.CONFLICT,
            message: "E-mail em uso por outro usuário"
        })
    }
}