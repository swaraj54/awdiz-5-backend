import { Router } from "express";
import UserRoutes from './User.routes.js'

const router = Router();

router.use('/auth', UserRoutes)
// router.use('/payment', PaymentRoutes)
// router.use('/product', ProductRoutes)
// router.use('/cart', CartRoutes)

export default router;