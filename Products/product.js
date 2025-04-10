const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name:{type:String, required:true},
    newPrice:{type:Number, required:true},
    lastPrice:{type:Number, required:true},
    unit:{type:String, required:true},
    img:{type:String, required:true},
}, {timestamps:true})

const ProductModel = mongoose.model('Products', productSchema)
module.exports = ProductModel