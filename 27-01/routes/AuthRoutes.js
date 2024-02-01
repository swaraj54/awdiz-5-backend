import { Router } from "express";
import { register, login, getCurrentUser, getProfileData } from "../controllers/Auth.controllers.js";
import { isJwtExpire } from "../middlewares/TokenMiddleware.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/get-current-user', getCurrentUser);
router.post('/get-profile-data', isJwtExpire, getProfileData)

export default router;