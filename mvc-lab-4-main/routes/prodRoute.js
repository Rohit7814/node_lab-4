const express = require('express');
const proModel = require('../models/products.model');
const db = require('../config/db.config');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await proModel.find(); // Use find method to get all products
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/new', async (req, res) => {
    try {
        const { product_name, product_category, product_price, product_country_of_origin } = req.body;

        // Create a new product instance using the proModel
        const newProduct = new proModel({
            product_name,
            product_category,
            product_price,
            product_country_of_origin
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();
        console.log(savedProduct);
        res.status(201).json(savedProduct); // Return the saved product as a response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message }); // Return the error message in the response
    }
});

module.exports = router;