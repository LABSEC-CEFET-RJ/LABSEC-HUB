import { Router } from "express";
import { AuthMiddleware } from "@/middleware/authenticate";
import { LessonController } from "@/controller/lessonController";

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
router.post('/create', AuthMiddleware.ensureAdmin , lessonController.CreateLesson)


/**
     * @route GET lesson//get/:public_id
     * @description Retorna uma lesson dado o public_id dela
     * @returns { lesson: Lesson  }
     */
router.get('/get/:public_id', AuthMiddleware.ensureAuthenticated , lessonController.GetLesson)


/**
     * @route UPDATE lesson/update/:public_id
     * @description Atualiza uma lesson dado o public_id dela
     * @param {string} slug
     * @param {string} title
     * @param {string} subtitle
     * @param {text} body
     * @returns { message: string  }
     */
router.patch('/update/:public_id', AuthMiddleware.ensureAdmin , lessonController.UpdateLesson)

/**
     * @route DELETE lesson/delete/:public_id
     * @description Deleta uma lesson do banco dado o public_id dela
     * @returns { message: string  }
     */
router.delete('/delete/:public_id', AuthMiddleware.ensureAdmin , lessonController.DeleteLesson)

export default router