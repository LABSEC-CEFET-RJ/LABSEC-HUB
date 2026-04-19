import { HttpCode, HttpError } from "@/errors/error.config";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err: Error | any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack)

    if (err instanceof HttpError){
        return res.status(err.status).json({
            message: err.message
        })
    }

    return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: "Internal server error"})
}