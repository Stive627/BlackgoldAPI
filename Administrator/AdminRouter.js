const express = require('express')
const { getAdmins, AddAdmin, UpdateAdmin, DeleteAdmin } = require('./AdminController')
const AdminRouter = express.Router()
AdminRouter.get('/', getAdmins)
AdminRouter.post('/add', AddAdmin)
AdminRouter.put('/update', UpdateAdmin)
AdminRouter.delete('/delete', DeleteAdmin)

module.exports = AdminRouter