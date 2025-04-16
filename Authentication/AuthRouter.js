const express = require('express')
const sendOTP = require('./Users/sendOTP')
const { getAdmins, AddAdmin, UpdateAdmin, DeleteAdmin } = require('./Administrator/AdminController')

const AuthRouter = express.Router()

//users
AuthRouter.get('/user/sendotp', sendOTP)

//Admins
AuthRouter.get('/admin', getAdmins)
AuthRouter.post('/admin/add', AddAdmin)
AuthRouter.put('/admin/update/:id', UpdateAdmin)
AuthRouter.delete('/admin/delete/:id', DeleteAdmin)

module.exports = AuthRouter