import express from 'express';
import { Welcome } from './controllers/Welcome.controllers.js';
import AllRoutes from './routes/index.js'

const app = express();

app.get('/', Welcome)

app.use('/api/v1', AllRoutes)

// '/api/v1' + '/auth' + '/login' , ()=>{}

// '/api/v1' + '/cart' + '/get-cart-products', ()=>{} - assignment

// '/api/v1' + '/payment' + '/make-payment' , ()=>{}, - assignment

app.listen(8000, () => { console.log("Running on port 8000.") })