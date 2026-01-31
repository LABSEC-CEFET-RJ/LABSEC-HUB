
export class AppError extends Error {

    public readonly statusCode: number
    
    constructor(message: string, statusCode = 400) {
        super(message)
        
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}