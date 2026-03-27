import { Router } from "express";
import authRouter from './auth'
import userRouter from './userRoutes'
import newsRouter from './news'

const router = Router()

router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use("/news", newsRouter);

export default router