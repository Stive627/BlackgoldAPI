const express = require('express')
const multer = require('multer')
const {addProduct, updateProduct, deleteProduct, getProducts, getSeasonalProducts} = require('./productController')
require('dotenv').config()

const s3 = new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    }
})


const storage = multerS3({
    s3:s3,
    bucket:process.env.AWS_BUCKET,
    metadata:function(req, file, cb){
        cb(null, {fieldName:file.fieldname})
    },
    key:function(req, file, cb){
        const fileName = Date.now()+ '-' + file.originalname;
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })
const productRouter = express.Router()
productRouter.post('/add', upload.single('img'), addProduct)
productRouter.put('/update/:_id', upload.single('img'), updateProduct)
productRouter.delete('/delete/:_id', deleteProduct)
productRouter.get('/', getProducts)
productRouter.get('/seasonalProducts', getSeasonalProducts)
module.exports = productRouter