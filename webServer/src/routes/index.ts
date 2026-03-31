import { Router } from "express";
import authRouter from './auth'
import vmRouter from './virtual_machine'
import moduleRouter from './module'
import userRoutes from './userRoutes'
import lessonRouter from "./lessonRoutes"

const router = Router()

router.use('/auth', authRouter)
router.use('/user',userRoutes)
router.use('/vm', vmRouter)
router.use('/module', moduleRouter)
router.use('/lesson',lessonRouter)
export default router