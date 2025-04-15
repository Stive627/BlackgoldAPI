const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name:{type:String, required:true},
    newPrice:{type:Number, required:true},
    lastPrice:{type:Number, required:false},
    unit:{type:String, required:true},
    img:{type:String, required:true},
    category:{type:String, required:true},
    subCategory:{type:String, required:true},
    quantity:{type:String, required:true},
    description:{type:String, required:false}
}, {timestamps:true})

const ProductModel = mongoose.model('Products', productSchema)
module.exports = ProductModel