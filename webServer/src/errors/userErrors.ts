/**
 * @fileoverview Módulo de erros personalizados para operações de usuário/administrador.
 * 
 * Este módulo define classes de erro que estendem {@link HttpError} para representar
 * condições de falha específicas relacionadas a usuários e administradores.
 * Cada erro é mapeado para um código HTTP apropriado.
 * 
 * @module errors/userErrors
 */

import { HttpCode, HttpError } from "./error.config";

/**
 * Erro lançado quando um usuário não é encontrado no sistema.
 * 
 * @class UserNotFoundError
 * @extends {HttpError}
 * 
 * @example
 * throw new UserNotFoundError();
 * // Lança erro com status 404 e mensagem "Usuário não encontrado"
 * 
 * @example
 * throw new UserNotFoundError("Administrador com ID 123 não existe");
 * // Lança erro com status 404 e mensagem personalizada
 */
export class UserNotFoundError extends HttpError {
    /**
     * Cria uma instância de UserNotFoundError.
     * @param {string} [message="Usuário não encontrado"] - Mensagem de erro personalizada
     */
    constructor(message: string = "Usuário não encontrado") {
        super({
            status: HttpCode.NOT_FOUND,
            message
        })
    }
}

/**
 * Erro lançado quando há tentativa de usar um e-mail já cadastrado.
 * 
 * @class EmailInUseError
 * @extends {HttpError}
 * 
 * @example
 * throw new EmailInUseError();
 * // Lança erro com status 409 e mensagem "E-mail em uso por outro usuário"
 */
export class EmailInUseError extends HttpError {
    /**
     * Cria uma instância de EmailInUseError.
     * @param {string} [message="E-mail em uso por outro usuário"] - Mensagem de erro personalizada
     */
    constructor(message: string = "E-mail em uso por outro usuário") {
        super({
            status: HttpCode.CONFLICT,
            message
        })
    }
}

/**
 * Erro lançado quando há tentativa de modificar o administrador root.
 * 
 * O administrador root é protegido contra alterações para garantir
 * a integridade e segurança do sistema.
 * 
 * @class RootUpdateError
 * @extends {HttpError}
 * 
 * @example
 * throw new RootUpdateError();
 * // Lança erro com status 403 e mensagem padrão
 */
export class RootUpdateError extends HttpError {
    /**
     * Cria uma instância de RootUpdateError.
     * @param {string} [message="O administrador root não pode ter seus dados alterados"] - Mensagem de erro personalizada
     */
    constructor(message: string = "O administrador root não pode ter seus dados alterados") {
        super({
            status: HttpCode.FORBIDDEN,
            message
        })
    }
}