import { Response } from "express";

/**
 * @fileoverview Módulo de configuração de erros HTTP para o servidor Express.
 * Define códigos de status HTTP padronizados, tipos de erro e uma classe
 * customizada para tratamento de exceções HTTP.
 * @module errors/error.config
 */

/**
 * Enum contendo os códigos de status HTTP mais utilizados.
 * @enum {number}
 */
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

/**
 * Interface que define os campos necessários para criar um erro HTTP.
 * @interface HttpErrorFields
 */
export interface HttpErrorFields {
    status: HttpCode,
    message: string
}

/**
 * Classe customizada para representar erros HTTP.
 * Estende a classe Error nativa do JavaScript, adicionando
 * suporte a códigos de status HTTP e métodos utilitários.
 * 
 * @class HttpError
 * @extends {Error}
 * 
 * @example
 * // Criando e lançando um erro de não encontrado
 * throw new HttpError({
 *   status: HttpCode.NOT_FOUND,
 *   message: "Usuário não encontrado"
 * });
 * 
 * @example
 * // Enviando erro como resposta HTTP
 * const error = new HttpError({
 *   status: HttpCode.BAD_REQUEST,
 *   message: "Dados inválidos"
 * });
 * error.sendMessage(res);
 */
export class HttpError extends Error {
    /** Código de status HTTP associado ao erro */
    public readonly status: HttpCode

    /**
     * Cria uma nova instância de HttpError.
     * @param {HttpErrorFields} fields - Objeto contendo status e mensagem do erro
     * @param {HttpCode} fields.status - Código de status HTTP
     * @param {string} fields.message - Mensagem descritiva do erro
     */
    constructor({ status, message }: HttpErrorFields) {
        super(message)
        this.status = status;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}