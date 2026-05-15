import { Router } from "express";
import { AuthMiddleware } from "@/middleware/authenticate";
import { LessonController } from "@/controller/LessonController";

const router = Router()
const lessonController = new LessonController()

router
    /**
     * @route POST lesson/create
     * @description Cria uma lesson nova no banco
     * @param {string} title
     * @param {string} slug
     * @param {string} subtitle
     * @param {text} body
     * @returns {message: string}
     */
router.post('/', AuthMiddleware.ensureAdmin , lessonController.createLesson)


/**
     * @route GET lesson/get/:public_id
     * @description Retorna uma lesson dado o public_id dela
     * @returns { lesson: Lesson  }
     */
router.get('/:public_id', AuthMiddleware.ensureAuthenticated , lessonController.getLesson)


/**
     * @route UPDATE lesson/update/:public_id
     * @description Atualiza uma lesson dado o public_id dela
     * @param {string} slug
     * @param {string} title
     * @param {string} subtitle
     * @param {text} body
     * @returns { message: string  }
     */
router.patch('/:public_id', AuthMiddleware.ensureAdmin , lessonController.updateLesson)

/**
     * @route DELETE lesson/delete/:public_id
     * @description Deleta uma lesson do banco dado o public_id dela
     * @returns { message: string  }
     */
router.delete('/:public_id', AuthMiddleware.ensureAdmin , lessonController.deleteLesson)

export default router