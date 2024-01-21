import express from 'express';
import AllRoutes from './routes/index.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
dotenv.config();


app.get('/', (req, res) => {
    res.send("Welcome..")
})

app.use('/api/v1', AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database connected.")
})

app.listen(8000, () => { console.log("Listening on port 8000.") })