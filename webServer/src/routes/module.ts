import { ModuleController } from "@/controller/ModuleController";
import { AuthMiddleware } from "@/middleware/authenticate";
import { Router } from "express";

const router = Router()

/**
   * @route POST /module
   * @access Private (Admin)
   * @param {string} name - Nome do módulo
   * @param {string} desc - Descrição do módulo
   * @param {string} slug - Slug do módulo
   * @param {string} img - Imagem do módulo
   * @description Cria um novo módulo
   */
router.post('/', AuthMiddleware.ensureAdmin, ModuleController.createModule)

/**
   * @route POST /module/progress
   * @access Private (Admin)
   * @param {string} moduleId - ID do módulo
   * @param {string} userId - ID do usuário
   * @description Salva o progresso de um módulo
   */
router.post('/progress', AuthMiddleware.ensureAuthenticated, ModuleController.saveProgress)

export default router;