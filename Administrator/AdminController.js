const AdminModel = require("./Admin")

const AddAdmin = async(req, res) => {
    const {name, email, dob} = req.body
    if(!name || !email || !dob){
        return res.status(400).send('The fields are missing')
    }
    const newAdmin = new AdminModel({...req.body})
    await newAdmin.save()
    .then(()=> res.status(200).send('New admin added'))
    .catch(()=> res.status(400).send(err))
} 
const UpdateAdmin = async(req, res) => {
    const {name, email, dob} = req.body
    if(!name || !email || !dob){
        return res.status(400).send('The fields are missing')
    }
    try {
        const admin = await AdminModel.findOneAndUpdate({_id:req.params._id})
        res.status(200).send(`The admin ${admin.name} is updated`)
    } catch (error) {
        res.status(400).send(error)
    }
} 
const DeleteAdmin = async(req, res) => {
    try {
        const admin = await AdminModel.findOneAndDelete({_id:req.params._id})
        res.status(200).send(admin.name)
    } catch (error) {
        res.status(400).send(error)
    }
}
const getAdmins = async(req, res) => {
    try {
        const admins = await AdminModel.find()
        res.status(200).send(admins)
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {AddAdmin, UpdateAdmin, DeleteAdmin, getAdmins}