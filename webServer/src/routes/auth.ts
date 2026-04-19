import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const authController = new AuthController()
const router = Router()

/**
 * @route POST /auth/login
 * @desc Realizar login do usuário e retornar um token JWT
 * @access Public
 */
router.post('/login', authController.login)

export default router