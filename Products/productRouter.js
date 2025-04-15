const express = require('express')
const multer = require('multer')
const {addProduct, updateProduct, deleteProduct, getProducts, getSeasonalProducts, getRecommendedProducts} = require('./productController')

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'public/products/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    } 
})
  
const upload = multer({ storage: storage })
const productRouter = express.Router()
productRouter.post('/add', upload.single('img'), addProduct)
productRouter.put('/update/:_id', upload.single('img'), updateProduct)
productRouter.delete('/delete/:_id', deleteProduct)
productRouter.get('/', getProducts)
productRouter.get('/seasonalProducts', getSeasonalProducts)
productRouter.get('/recommended/:user_id', getRecommendedProducts)
module.exports = productRouter