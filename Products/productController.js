const ProductModel = require("./product")
const fs = require('fs')
const addFromPrice = require("../functions/addFromPrice")
const {S3Client, DeleteObjectCommand} = require('@aws-sdk/client-s3')
const getUrlKey = require("../functions/getUrlKey")
require('dotenv').config()

const s3 = new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    }
})

const addProduct = async(req, res) => {
    const {name, newPrice, unit, category, subCategory, quantity, description} = req.body
    const path = req.file?.location
    const addedValue = +addFromPrice()
    if(!name || !newPrice || !unit || !path || !category || !subCategory || !quantity || !description){
        return res.status(400).send('The fields are missing.')
    }
    const newProduct = new ProductModel({...req.body, img:path, lastPrice:+newPrice + addedValue})
    await newProduct.save()
    .then((value)=>res.status(200).send(value))
    .catch(err => res.status(400).send(err))

}

const updateProduct = async(req, res) => {
    const {name, newPrice, unit, category, subCategory, quantity, description} = req.body
    const path = req.file?.location
    const addedValue = +addFromPrice()
    if(!name || !newPrice || !unit || !path || !category || !subCategory || !quantity || !description){
        return res.status(400).send('The fields are missing.')
    }
    try {
        const media = await ProductModel.findOne({_id:req.params._id})
        if(media.img !== path){
            const key = getUrlKey(media.url)
            const command = new DeleteObjectCommand({
                Bucket:process.env.AWS_BUCKET,
                Key:decodeURI(key)
            })
            await s3.send(command)
        }
        await ProductModel.findOneAndUpdate({_id:req.params._id}, {...req.body, img:path, lastPrice:+newPrice + addedValue})
        .then((value)=>{res.status(200).send(value)})    
            
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteProduct = async(req, res) => {
    try {
        const media = await ProductModel.deleteOne({_id:req.params._id})
        const key = getUrlKey(media.url)
        const command = new DeleteObjectCommand({
            Bucket:process.env.AWS_BUCKET,
            Key:decodeURI(key)
        })
        await s3.send(command)
        res.status(200).send('The product is deleted')
    } catch (error) {
        res.status(400).send(error)
    }
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