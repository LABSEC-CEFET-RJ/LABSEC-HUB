import { Router } from "express";
import authRouter from './auth'
import userRouter from './user'
import vmRouter from './virtual_machine'
import moduleRouter from './module'

const router = Router()

router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use('/vm', vmRouter)
router.use('/module', moduleRouter)

export default router