import { Request, Response, NextFunction } from 'express';
import { HttpError, HttpCode, InternalServerError } from '@/errors/error.config';
import { ValidationError } from 'yup';

export function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) return next(error);

  let handledError = error;
  console.log(handledError);
  
  if(error instanceof ValidationError) {
    handledError = new HttpError({
      status: HttpCode.BAD_REQUEST,
      message: `Erro de validação: ${error.errors.join(', ')}`
    })
  } else if(!(error instanceof HttpError)) {
    handledError = new InternalServerError((error as Error).message)
  }

  return (handledError as HttpError).sendMessage(res)
}