import { Router } from "express";
import { AuthMiddleware } from "@/middleware/authenticate";
import { VMController } from "@/controller/VMController";
import { UserHasVMController } from "@/controller/UserHasVMController";

const router = Router()

/**
 * @route GET /vm
 * @desc Obter todas as máquinas virtuais
 * @access Usuario logado
*/
router.get('/', AuthMiddleware.ensureAuthenticated,  VMController.getAll)

/**
 * @route POST /vm *
 * @desc Criar uma nova máquina virtual para o usuário autenticado
 * @param {string} name - nome da VM
 * @param {}
 * @access Private
 */
router.post('/', AuthMiddleware.ensureAdmin, VMController.create)


/**
 * @route POST /vm *
 * @desc Criar uma nova máquina virtual para o usuário autenticado
 * @access Private
 */
router.patch('/:vmId', AuthMiddleware.ensureAdmin, VMController.update)

router.delete('/:vmId', AuthMiddleware.ensureAdmin, VMController.delete)

/**
 * @route POST /vm/is-active
 * @desc Verificar se uma máquina virtual está ativa
 * @access Private
 */
router.get('/:vmId/user/:userId/is-active', AuthMiddleware.ensureAuthenticated, UserHasVMController.checkIsActive)

router.post('/:vmId/user/:userId', AuthMiddleware.ensureAdmin, UserHasVMController.createVM)

router.delete('/:vmId/user/:userId', AuthMiddleware.ensureAdmin, UserHasVMController.deleteVM)

export default router