const express = require('express')
const ipMiddleware = require('./Location/ipMiddleware')
const location = require('./Location/location')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const monggose = require('mongoose')
const productRouter = require('./Products/productRouter')
const AuthRouter = require('./Authentication/AuthRouter')
const uri = process.env.uri
const port = process.env.port || 8080
const app = express() 
app.use(cors({origin:'*', credentials:"true"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/products', productRouter)
app.use('/auth', AuthRouter)
app.get('/', async(req, res) => res.status(200).send('The api is working normally.'))
app.get('/location', ipMiddleware, location)
monggose.connect(uri, {dbName:"blackgold"}).then(()=> console.log('connected to mongodb🔥')).catch(err => console.error(err))
app.listen(port, ()=>console.log(`The server is running at http://localhost:${port}`))