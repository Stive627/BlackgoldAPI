const mongoose = require('mongoose')
const {Schema} = mongoose
const AdminSchema = new Schema({
    username:{type:String, required:false},
    dob:{type:Date, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})
const AdminModel = mongoose.model('Admin', AdminSchema)
module.exports = AdminModel