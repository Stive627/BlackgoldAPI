const createSMS = require("../sms")

const sendOTP = (req, res) => {
    try {
        const otp = Math.floor(Math.random()*8999 + 1000)
        const message = `Successful transfer of 30.000 FCFA to CHRISTIAN EYADI ( 237650927849). Fees: FCFA 150\n`
        createSMS(message)
        .then(()=>{
            res.status(200).send(message)
        })
        .catch(err => res.status(400).send(err))   
    } catch (error) {
        res.status(400).send(error)
    }
    
}
module.exports = sendOTP