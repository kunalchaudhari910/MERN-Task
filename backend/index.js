import express, { request } from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js'; 
import { Product } from './models/productModel.js';
import productsRoutes from './routes/productsRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ['Content-Type'],
// }));

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send("Hello");
});

app.use('/products', productsRoutes)

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("Database Connected Successfully");
        app.listen(PORT, ()=>{
            console.log(`app is listening to port : ${PORT}`);
        })
    })
    .catch((error) =>{
        console.log(error);
    })

