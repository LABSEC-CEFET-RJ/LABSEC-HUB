import { Router } from "express";
import VMController from "../controllers/VMController.js";

const VMRoutes = Router();

VMRoutes.post("/createvm",  VMController.createVM)
VMRoutes.get("/getip/:newvm",  VMController.returnIPVM)
VMRoutes.get("/answer/:namevm/:answer",  VMController.returnAnswer)

export default VMRoutes;