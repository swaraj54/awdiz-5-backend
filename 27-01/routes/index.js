import { Router } from "express";
import AuthRoutes from './AuthRoutes.js'
import ProductRoutes from './ProductRoutes.js'

const router = Router();


router.use('/auth', AuthRoutes)
router.use('/product', ProductRoutes)

export default router;