const productsData = require('../data/products.json'); 
const products = productsData.products; 

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id); 
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid product ID' }); 
  }
  const product = products.find(p => p.id === id); 
  if (product) {
    res.json(product); 
  } else {
    res.status(404).json({ message: 'Product not found' }); 
  }
};

exports.getProductByCategory = (req, res) => {
  const { category } = req.params; 
  const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase()); 
  if (filteredProducts.length > 0) {
    res.json(filteredProducts); 
  } else {
    res.status(404).json({ message: 'No products found in this category' }); 
  }
};
