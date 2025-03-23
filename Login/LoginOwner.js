require('dotenv').config()
const loginOwner = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).send('The fields are missing')
    }
    if(!email === process.env.email_owner || !password === process.env.password_owner){
        res.status(400).send('Username or email are incorrect.')
    }
    res.status(200).send('Authentication granted.')
}
module.exports = loginOwner