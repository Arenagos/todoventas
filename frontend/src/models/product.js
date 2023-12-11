// product.js
const mongoose = require('../config/database');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // Otros campos según tus necesidades
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
