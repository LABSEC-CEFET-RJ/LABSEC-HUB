import { Router } from "express";
import authRouter from './auth'
import userRouter from './userRoutes'
import lessonRouter from "./lessonRoutes"

const router = Router()

router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use('/lesson',lessonRouter)
export default router