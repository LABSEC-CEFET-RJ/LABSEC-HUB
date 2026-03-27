import { Request, Response, NextFunction } from 'express';
import { HttpError, HttpCode } from '@/errors/error.config';
import { ValidationError } from 'yup';

export function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) return next(error);
  
  if(error instanceof ValidationError) {
    return res.status(HttpCode.BAD_REQUEST).json({
      status: HttpCode.BAD_REQUEST,
      error: `Erro de validação: ${error.errors.join(', ')}`
    })
  }

  if (error instanceof HttpError) {
    return res.status(error.status).json({ status: error.status, error: error.message });
  }


  const status = typeof (error as any)?.status === 'number' ? 
    (error as any).status
    : HttpCode.INTERNAL_SERVER_ERROR;

  const message = (error as any)?.message ?? 'Erro interno do servidor';

  console.log(error)

  return res.status(status).json({ status, error: message });
}