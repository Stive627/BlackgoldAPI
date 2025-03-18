const { default: axios } = require("axios")

const location = async(req, res) => {
    const url = `https://ipapi.co/${req.ip}/json/`
    try{
        axios({url:url, method:"GET", headers:{"Content-Type":"application/json"}})
        .then((value) => {
            res.status(200).send(value.data)
        })
        .catch(err => res.status(400).send(err))
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = location

