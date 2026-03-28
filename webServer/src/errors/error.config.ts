import { Response } from "express";

export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500
}
export interface HttpErrorFields {
    status: HttpCode,
    message: string
}

export class HttpError extends Error {
    public readonly status: HttpCode

    constructor({ status, message }: HttpErrorFields) {
        super(message)
        this.status = status;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
        }
    }

    public sendMessage(res: Response) {
        return res.status(this.status).json({ message: this.message })
    }
}

export class InternalServerError extends HttpError {
    constructor(message: string = "Erro interno do servidor") {
        const status = HttpCode.INTERNAL_SERVER_ERROR
        super({ status, message });
    }
}