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



export default router;