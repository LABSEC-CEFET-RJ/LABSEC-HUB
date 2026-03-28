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
     * @route GET lesson/:PUBLIC_ID
     * @description Retorna uma lesson dado o public_id dela
     * @returns { lesson: Lesson  }
     */
router.post('/:PUBLIC_ID', AuthMiddleware.ensureAdmin , )


/**
     * @route UPDATE lesson/update/:PUBLIC_ID
     * @description Atualiza uma lesson dado o public_id dela
     * @param {string} slug
     * @param {string} title
     * @param {string} subtitle
     * @param {text} body
     * @returns { message: string  }
     */
router.post('/update/:PUBLIC_ID', AuthMiddleware.ensureAdmin , )

/**
     * @route DELETE lesson/delete/:PUBLIC_ID
     * @description Deleta uma lesson do banco dado o public_id dela
     * @returns { message: string  }
     */
router.post('/delete/:PUBLIC_ID', AuthMiddleware.ensureAdmin , )

export default router