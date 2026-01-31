/**
 * @fileoverview Módulo de rotas para gerenciamento de administradores.
 * 
 * Este módulo define as rotas HTTP para operações CRUD de administradores,
 * delegando a lógica de negócio para o {@link AdminController}.
 * 
 * @module routes/adminRoutes
 */

import { Router } from "express";
import AdminController from "../controller/adminController";

/**
 * Router do Express configurado com as rotas de administrador.
 * @type {Router}
 */
const router: Router = Router()

// TODO: Adicionar autenticação (apenas administradores podem realizar requisições para estas rotas)
router
    /**
     * @route GET /admin
     * @description Obtém os dados de um administrador específico pelo ID.
     * @access Privado
     * 
     * @requestBody {Object} body
     * @requestBody {number} body.id - ID único do administrador
     * 
     * @response {200} OK - Retorna os dados do administrador
     * @responseBody {Object} admin - Dados do administrador encontrado
     * 
     * @throws {UserNotFoundError} 404 - Administrador não encontrado
     */
    .get('/admin', AdminController.getAdmin)

    /**
     * @route GET /admins
     * @description Lista todos os administradores cadastrados no sistema.
     * @access Privado
     * 
     * @response {200} OK - Retorna lista de administradores
     * @responseBody {Array<Object>} admins - Lista de todos os administradores
     */
    .get('/admins', AdminController.getAllAdmins)

    /**
     * @route POST /admin
     * @description Cria um novo administrador no sistema.
     * @access Privado
     * 
     * @response {201} Created - Administrador criado com sucesso
     * 
     * @throws {EmailInUseError} 409 - E-mail já está em uso por outro administrador
     * @throws {ValidationError} 400 - Dados inválidos (nickname, email ou password)
     */
    .post('/admin', AdminController.createAdmin)

    /**
     * @route PATCH /admin
     * @description Atualiza os dados de um administrador existente.
     * @access Privado
     * 
     * @param {string} id - ID do administrador a ser atualizado
     * @param {string} nickname - Novo nome do administrador (opcional)
     * @param {string} password - Nova senha do administrador (opcional)
     * 
     * @throws {UserNotFoundError} 404 - Administrador não encontrado
     * @throws {RootUpdateError} 403 - Não é permitido alterar o administrador root
     */
    .patch('/admin', AdminController.updateAdmin)

    /**
     * @route DELETE /admin
     * @description Remove um administrador do sistema.
     * @access Privado
     * 
     * @param {string} id - ID do administrador a ser removido
     * 
     * @throws {UserNotFoundError} 404 - Administrador não encontrado
     * @throws {RootUpdateError} 403 - Não é permitido remover o administrador root
     */
    .delete('/admin', AdminController.deleteAdmin)