const requestIp = require('request-ip')
const ipMiddleware = (req, res, next) => {
    const ipClient = requestIp.getClientIp(req)
    req.ip = ipClient
    next()
}
module.exports = ipMiddleware