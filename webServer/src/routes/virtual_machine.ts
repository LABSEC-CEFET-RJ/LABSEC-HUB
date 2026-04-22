import { Router } from "express";
import { AuthMiddleware } from "@/middleware/authenticate";
import { VMController } from "@/controller/VMController";
import { UserHasVMController } from "@/controller/UserHasVMController";

const router = Router()
const vmController = new VMController()
const userVMController = new UserHasVMController()

/**
 * @route GET /vm
 * @desc Obter todas as máquinas virtuais
 * @access Usuario logado
*/
router.get('/', AuthMiddleware.ensureAuthenticated,  vmController.getAll)

/**
 * @route POST /vm *
 * @desc Criar uma nova máquina virtual para o usuário autenticado
 * @param {string} name - nome da VM
 * @param {}
 * @access Private
 */
router.post('/', AuthMiddleware.ensureAdmin, vmController.create)


/**
 * @route POST /vm *
 * @desc Criar uma nova máquina virtual para o usuário autenticado
 * @access Private
 */
router.patch('/:vmId', AuthMiddleware.ensureAdmin, vmController.update)

router.delete('/:vmId', AuthMiddleware.ensureAdmin, vmController.delete)

/**
 * @route POST /vm/is-active
 * @desc Verificar se uma máquina virtual está ativa
 * @access Private
 */
router.get('/:vmId/user/:userId/is-active', AuthMiddleware.ensureAuthenticated, userVMController.checkIsActive)

router.post('/:vmId/user/:userId', AuthMiddleware.ensureAdmin, userVMController.createVM)

router.delete('/:vmId/user/:userId', AuthMiddleware.ensureAdmin, userVMController.deleteVM)

export default router