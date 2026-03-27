import { Router } from "express";
import { NewsController } from "../controller/NewsController.ts";
import { AuthMiddleware } from "@/middleware/authenticate";

const newsController = new NewsController()
const router = Router()

router.get('/all', newsController.getAllNews)
router.post('/create', AuthMiddleware.ensureAdmin ,newsController.createNews)
router.put('/update/:slug', AuthMiddleware.ensureAdmin, newsController.updateNews)
router.delete('/delete/:slug', AuthMiddleware.ensureAdmin, newsController.deleteNews)
export default router