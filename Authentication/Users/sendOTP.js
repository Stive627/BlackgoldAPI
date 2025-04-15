const createMessage = require("../sms")

const sendOTP = (req, res) => {
    try {
        const otp = Math.floor(Math.random()*8999 + 1000)
        createMessage(otp)
        .then((value)=>{
            res.status(200).send(`We have sent the otp to your number. ${otp}\n ${value}`)
        })
        .catch(err => res.status(400).send(err))   
    } catch (error) {
        res.status(400).send(error)
    }
    
}
module.exports = sendOTP