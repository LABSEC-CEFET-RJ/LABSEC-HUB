import { Router } from "express";
import { AdminController } from "../controller/AdminController";
import { AuthMiddleware } from "@/middleware/authenticate";

const router = Router()
const controller = new AdminController()

// TODO: Adicionar autenticação (apenas administradores podem realizar requisições para estas rotas)

router
    // TODO: Adicionar autenticação de administrador root
    /**
     * @route GET /admin
     *
     * @param {string} public_id
     * 
     * @response {200} OK - Retorna os dados do administrador
     * @responseBody {Object} admin
     * 
     * @throws {UserNotFoundError}
     */
    .get('/:public_id', AuthMiddleware.ensureAdmin, controller.getAdminByPublicId)

    /**
     * @route GET /admin/all
     * 
     * @response {200} OK - Retorna lista de administradores
     * @responseBody {Array<Object>}
     */
    .get('/', AuthMiddleware.ensureAdmin, controller.getAllAdmins)

    /**
     * @route POST /admin
     * 
     * @response {201} Created
     * 
     * @throws {EmailInUseError}
     * @throws {ValidationError}
     */
    .post('/', AuthMiddleware.ensureRoot, controller.createAdmin)

    /**
     * @route PUT /admin
     * @description Atualiza os dados de um administrador existente.
     * 
     * @param {string} public_id
     * @param {string} nickname
     * @param {string} password
     * 
     * @throws {UserNotFoundError} 404
     * @throws {RootUpdateError} 403
     */
    .put('/:public_id', AuthMiddleware.ensureRoot, controller.updateAdmin)

    // TODO: Adicionar autenticação de administrador root
    /**
     * @route DELETE /admin
     * 
     * @param {string} public_id
     * 
     * @throws {UserNotFoundError} 404
     * @throws {RootUpdateError} 403
     */
    .delete('/:public_id', AuthMiddleware.ensureRoot, controller.deleteAdmin)

export default router