import { Router } from "express";
import { addCart, readCart } from "../controllers/User.controllers.js";

const router = Router();

router.post('/add-cart', addCart)
router.post('/read-cart', readCart)

export default router;