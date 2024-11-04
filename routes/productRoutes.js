const express = require('express');
const { getAllProducts, getProductById, getProductByCategory } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/category/:category',getProductByCategory);

module.exports = router;
