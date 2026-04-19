import { HttpCode, HttpError } from "./error.config";

export class UserNotFoundError extends HttpError {
    constructor(message: string = "Usuário não encontrado") {
        super({
            status: HttpCode.NOT_FOUND,
            message
        })
    }
}

export class EmailInUseError extends HttpError {
    constructor(message: string = "E-mail em uso por outro usuário") {
        super({
            status: HttpCode.CONFLICT,
            message
        })
    }
}

export class RootUpdateError extends HttpError {
    constructor(message: string = "O administrador root não pode ter seus dados alterados") {
        super({
            status: HttpCode.FORBIDDEN,
            message
        })
    }
}

export class RootDeleteError extends HttpError {
    constructor(message: string = "O administrador root não pode ser removido") {
        super({
            status: HttpCode.FORBIDDEN,
            message
        })
    }
}