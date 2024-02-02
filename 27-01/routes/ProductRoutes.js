import { Router } from "express";
import { addProduct } from "../controllers/Product.controllers.js";

const router = Router();

router.post('/add-product', addProduct)

export default router;