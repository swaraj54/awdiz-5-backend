import { Router } from "express";
import { addProduct, readProducts, getSingleProduct } from "../controllers/Product.controllers.js";

const router = Router();

router.post('/add-product', addProduct)
router.get('/read-products', readProducts)
router.post('/get-single-product', getSingleProduct)

export default router;