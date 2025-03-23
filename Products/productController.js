const ProductModel = require("./product")

const addProduct = async(req, res) => {
    const {name, price, category} = req.body
    if(!name || !price || !category){
        return res.status(400).send('The fields are missing.')
    }
    const newProduct = new ProductModel({...req.body})
    await newProduct.save()
    .then(()=>res.status(200).send('A new product added'))
    .catch(err => res.status(400).send(err))

}

const updateProduct = async(req, res) => {
    if(!name, !price, !category){
        return res.status(400).send('The fields are missing.')
    }
    await ProductModel.findOneAndUpdate({_id:req.params._id}, {...req.body})
    .then(()=>res.status(200).send('The product is updated'))
    .catch(err => res.status(400).send(err))
}
const deleteProduct = async(req, res) => {
    await ProductModel.deleteOne({_id:req.params._id})
    .then(()=>res.status(200).send('The product is deleted'))
    .catch(err => res.status(400).send(err))
}
const getProducts = async(req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error)
    }    
}

module.exports = {addProduct, updateProduct, deleteProduct, getProducts}