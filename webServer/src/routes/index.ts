import { Router } from "express";
import authRouter from './auth'
import userRouter from './userRoutes'
import newsRouter from './newsRoutes'
import lessonRouter from "./lessonRoutes"

const router = Router()

router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use("/news", newsRouter);
router.use('/lesson',lessonRouter)
export default router