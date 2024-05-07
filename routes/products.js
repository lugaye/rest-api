const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

///fetch all products
router.get('/', async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

//fetch a single product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

//create a new product
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    try{
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch(err){
        res.status(400).json({ message: err.message });
    }
});

//update a product
router.put('/:id', getProduct, async (req, res) => {
    if(req.body.name != null){
            res.product.name = req.body.name;
    }
    if(req.body.price != null){
        res.product.price = req.body.price;
    }
    if(req.body.description != null){
        res.product.description = req.body.description;
    }

    try{
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch(err){
        res.status(400).json({ message: err.message });
    }
});

//delete a product
router.delete('/:id', getProduct, async (req, res) => {
    try{
        await res.product.remove();
        res.json({ message: "Product deleted" });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
});

//get product function
async function getProduct(req, res, next){
    let product;

    try{
        product = await Product.findById(req.params.id);
        if(product == null){
            return res.status(404).json({ message: "Product not found."});
        }
    } catch(err){
        return res.status(500).json({ message: err.message });
    }

    res.product = product;
    next();
}

module.exports = router;