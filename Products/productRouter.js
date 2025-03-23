const express = require('express')
const {addProduct, updateProduct, deleteProduct, getProducts} = require('./productController')
const productRouter = express.Router()
productRouter.post('/add', addProduct)
productRouter.put('/update/:_id', updateProduct)
productRouter.delete('/delete/_id', deleteProduct)
productRouter.get('/', getProducts)
module.exports = productRouter