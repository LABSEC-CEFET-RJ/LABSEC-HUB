import { Router } from "express";
import { AuthMiddleware } from "@/middleware/authenticate";
import { UserController } from "@/controller/UserController";
const router = Router()
const userController = new UserController()

router
    /**
     * @route POST /user/lesson/progress
     * @description Salva o progresso do usuario de uma lição
     * @param {string} lesson_public_id
     * @returns { message: string  }
     */
router.post('/lesson/progress', AuthMiddleware.ensureAuthenticated, userController.saveLesson)

/**
     * @route POST /user/module/progress
     * @description Salva o progresso do usuario de um modulo
     * @param {string} module_public_id
     * @returns { message: string  }
     */
router.post('/module/progress', AuthMiddleware.ensureAuthenticated, userController.saveModule);

/**
     * @route POST /user/course/progress
     * @description Salva o progresso do usuario de um curso
     * @param {string} course_public_id
     * @returns { message: string  }
     */
router.post('/course/progress', AuthMiddleware.ensureAuthenticated, userController.saveCourse);

/**
     * @route POST /user/create
     * @description Cria um usuario, só administradores podem acessar
     * @param {string} nickname
     * @param {string} email
     * @param {string} password
     * @returns { message: string  }
     */
router.post('/create', AuthMiddleware.ensureAdmin , userController.createUser)
export default router