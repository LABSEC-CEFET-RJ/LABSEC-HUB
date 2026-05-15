import { Router } from "express";
import authRouter from './auth'
import userRouter from './userRoutes'
import adminRouter from './adminRoutes'
import newsRouter from './newsRoutes'
import vmRouter from './virtual_machine'
import moduleRouter from './moduleRoutes'
import lessonRouter from "./lessonRoutes"

const router = Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use("/news", newsRouter);
router.use('/vm', vmRouter)
router.use('/module', moduleRouter)
router.use('/lesson', lessonRouter)

export default router