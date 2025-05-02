const express = require('express')
const sendOTP = require('./Users/sendOTP')
const { getAdmins, AddAdmin, UpdateAdmin, DeleteAdmin, login } = require('./Administrator/AdminController')

const AuthRouter = express.Router()

//users
AuthRouter.get('/user/sendotp', sendOTP)

//Admins
AuthRouter.post('/admin/login', login)

module.exports = AuthRouter