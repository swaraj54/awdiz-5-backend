import { Router } from "express";
import { addProduct, readProducts, getSingleProduct, testingMatchGroupStaging } from "../controllers/Product.controllers.js";

const router = Router();

router.post('/add-product', addProduct)
router.get('/read-products', readProducts)
router.post('/get-single-product', getSingleProduct)
router.get('/match-grouping', testingMatchGroupStaging)

export default router;