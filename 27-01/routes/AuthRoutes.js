import { Router } from "express";
import { register ,login, getCurrentUser} from "../controllers/Auth.controllers.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/get-current-user', getCurrentUser);

export default router;