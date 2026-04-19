import { Router } from "express";
import authRouter from './auth'
import userRouter from './userRoutes'
import newsRouter from './newsRoutes'
import vmRouter from './virtual_machine'
import moduleRouter from './module'
import lessonRouter from "./lessonRoutes"

const router = Router()

router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use("/news", newsRouter);
router.use('/vm', vmRouter)
router.use('/module', moduleRouter)
router.use('/lesson',lessonRouter)
export default router