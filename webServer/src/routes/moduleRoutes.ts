import { ModuleController } from "@/controller/ModuleController";
import { AuthMiddleware } from "@/middleware/authenticate";
import { Router } from "express";

const router = Router()
const moduleController = new ModuleController()
/**
   * @route POST /module
   * @access Private (Admin)
   * @param {string} name - Nome do módulo
   * @param {string} desc - Descrição do módulo
   * @param {string} slug - Slug do módulo
   * @param {string} img - Imagem do módulo
   * @description Cria um novo módulo
   */
router.post('/', AuthMiddleware.ensureAdmin, moduleController.createModule)
router.get('/', AuthMiddleware.ensureAdmin, moduleController.getAll)
router.get('/:moduleId', AuthMiddleware.ensureAdmin, moduleController.getModuleById)
router.patch('/:moduleId', AuthMiddleware.ensureAdmin, moduleController.updateModule)
router.delete('/:moduleId', AuthMiddleware.ensureAdmin, moduleController.deleteModule)

/* Module has Lesson */
router.post('/:moduleId/lesson/:lessonId', AuthMiddleware.ensureAdmin, moduleController.createLesson)
router.get('/:moduleId/lesson/:lessonId', AuthMiddleware.ensureAdmin, moduleController.getLessonById)
router.patch('/:moduleId/lesson/:lessonId', AuthMiddleware.ensureAdmin, moduleController.updateLesson)
router.delete('/:moduleId/lesson/:lessonId', AuthMiddleware.ensureAdmin, moduleController.deleteLesson)


export default router;