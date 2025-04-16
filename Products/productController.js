const ProductModel = require("./product")
const fs = require('fs')
const addFromPrice = require("../functions/addFromPrice")

const addProduct = async(req, res) => {
    const {name, newPrice, unit, category, subCategory, quantity, description} = req.body
    const path = req.file?.path
    const addedValue = +addFromPrice()
    if(!name || !newPrice || !unit || !path || !category || !subCategory || !quantity || !description){
        return res.status(400).send('The fields are missing.')
    }
    const newProduct = new ProductModel({...req.body, img:encodeURI(path), lastPrice:+newPrice + addedValue})
    await newProduct.save()
    .then(()=>res.status(200).send({...req.body, img:encodeURI(path), lastPrice:+newPrice + addedValue}))
    .catch(err => res.status(400).send(err))

}

const updateProduct = async(req, res) => {
    const {name, newPrice, unit, category, subCategory, quantity, description} = req.body
    const path = req.file?.path
    const addedValue = +addFromPrice()
    if(!name || !newPrice || !unit || !path || !category || !subCategory || !quantity || !description){
        return res.status(400).send('The fields are missing.')
    }
    await ProductModel.findOneAndUpdate({_id:req.params._id}, {...req.body, img:encodeURI(path), lastPrice:+newPrice + addedValue})
    .then(()=>res.status(200).send({...req.body, img:encodeURI(path), lastPrice:+newPrice + addedValue}))
    .catch(err => res.status(400).send(err))
}
const deleteProduct = async(req, res) => {
    await ProductModel.deleteOne({_id:req.params._id})
    .then(()=>res.status(200).send('The product is deleted'))
    .catch(err => res.status(400).send(err))
}
const getProducts = async(req, res) => {
    try {
        const products = await ProductModel.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error)
    }    
}

const getSeasonalProducts = (req, res) => {
    try {
        fs.readdir('public/seasonal/', (err, files) => {
            if(err) return res.status(400).send('An error occured while fetching the images')
            res.status(200).send(files)   
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {addProduct, updateProduct, deleteProduct, getProducts, getSeasonalProducts}