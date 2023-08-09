'use strict'

var express = require('express');
var router = express.Router();
var db = require('../db');

const NotFound404 = { code: 404, message: 'Product not found' };

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// GET route to fetch all products
router.get('/', async (req, res, next) => {
    // await delay(2000);
    res.json(db.products);
});

// GET route to fetch a specific product by ID
router.get('/:id', async (req, res) => {
    const product = db.products.find(p => p.id === Number(req.params.id));
    // await delay(2000);
    product ? res.json(product) : res.status(404).json(NotFound404);
});

// POST route to add a new product
router.post('/', (req, res, next) => {
    const data = req.body;
    const newProduct = {
        id: db.products.length + 1,
        name: data.name,
        color: data.color,
        amount: data.amount,
        price: data.price
    };
    db.products.push(newProduct);
    res.status(201).json(newProduct);
});

// DELETE route to delete a product by ID
router.delete('/:id', (req, res, next) => {
    const index = db.products.findIndex(p => p.id === Number(req.params.id));
    if (index !== -1) {
        db.products.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json(NotFound404);
    }
});

// PUT route to replace a product by ID
router.put('/:id', (req, res, next) => {
    const index = db.products.findIndex(p => p.id === Number(req.params.id));
    if (index !== -1) {
        db.products[index] = req.body;
        res.json(db.products[index]);
    } else {
        res.status(404).json(NotFound404);
    }
});

// PATCH route to update a product by ID
router.patch('/:id', (req, res, next) => {
    const index = db.products.findIndex(p => p.id === Number(req.params.id));
    if (index !== -1) {
        db.products[index] = { ...db.products[index], ...req.body };
        res.json(db.products[index]);
    } else {
        res.status(404).json(NotFound404);
    }
});

module.exports = router;