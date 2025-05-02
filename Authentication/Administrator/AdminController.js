const AdminModel = require("./Admin")

const login = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password) return res.status(400).send('There are the missing files')
    const user = await AdminModel.findOne({email:email, password:password})
    if(!user) return res.status(400).send("You don't have an account, please contact the administrator.")
    res.status(200).send({status:'granted'})
}

module.exports = {login}