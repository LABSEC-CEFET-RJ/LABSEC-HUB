import { Router } from "express";
import { AuthController } from "../controller/authController";

const authController = new AuthController()
const router = Router()

router.post('/login', authController.login)

export default router