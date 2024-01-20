import express from 'express';
import { Login } from './controllers/Auth.controllers.js';
import AllRoutes from './Routes/index.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Welcome.")
})

app.use('/api/v1', AllRoutes)

// '/api/v1/auth/login'
// '/api/v1/payment/make-payment'
// '/api/v1/cart/get-cart-products'

app.listen(8000, () => { console.log("Listening on port 8000.") })