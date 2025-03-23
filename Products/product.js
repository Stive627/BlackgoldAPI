const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true, enum:['vegetable', 'fruit', 'food']}
}, {timestamps:true})

const ProductModel = mongoose.model('Products', productSchema)
module.exports = ProductModel