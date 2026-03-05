import { Router } from "express";
import { AuthMiddleware } from "@/middleware/authenticate";
import { VMController } from "@/controller/VMController";

const router = Router()

/**
 * @route POST /vm * @desc Criar uma nova máquina virtual para o usuário autenticado
 * @access Private
 */
router.post('/', AuthMiddleware.ensureAuthenticated, VMController.create)

/**
 * @route POST /vm/is-active
 * @desc Verificar se uma máquina virtual está ativa
 * @access Private
 */
router.post('/is-active', AuthMiddleware.ensureAuthenticated, VMController.checkIsActive)

/**
 * @route GET /vm
 * @desc Obter todas as máquinas virtuais
 * @access Private
 */
router.get('/', VMController.getAll)

export default router