import { Router } from "express";
import { Login, Register, getOwnData } from "../controllers/Auth.controllers.js";
import { checkId } from "../middlewares/Global.middlewares.js";

const router = Router();

router.get('/login', Login)
router.get('/register', Register)
router.post('/get-own-data', checkId, getOwnData)


export default router;