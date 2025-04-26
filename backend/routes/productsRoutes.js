import express from 'express';
import { Product } from '../models/productModel.js';

const router = express.Router();


router.post('/', async(request, response) =>{
    try {
        if(
            !request.body.title ||
            !request.body.category ||
            !request.body.price
        ){
            return response.status(400).send({message: "All fields are required"});
        }
        const newProduct = {
            title : request.body.title,
            category : request.body.category,
            price : request.body.price,
        };
        const product = await Product.create(newProduct);
        return response.status(200).send(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
});


router.get('/' , async(request, response)=>{
    try {
        const products = await Product.find({});
        return response.status(200).json({
            count : products.length,
            data: products
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
});

router.get('/:id' , async(request, response)=>{
    try {
        const {id} = request.params;

        const product = await Product.findById(id);
        return response.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})

router.put('/:id' , async(request, response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.category ||
            !request.body.price
        ){
            return response.status(400).send({message: "All fields are required"});
        }
        const {id} = request.params;
        const result = await Product.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({message:"Product Not Found"})
        }
        return response.status(200).send({message:"Product Updated Successfully"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
});

router.delete('/:id' , async(request, response)=>{
    try {
        const {id} = request.params;
        const result = await Product.findByIdAndDelete(id, request.body);

        if (!result) {
            return response.status(404).send({message:"Product Not Found"})
        }
        return response.status(200).send({message:"Product Deleted Successfully"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
});

export default router;