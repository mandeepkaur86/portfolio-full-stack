const jwt = require('jsonwebtoken')
const SECRETKEY = 'euyebcy8273&^%&^ssy7'

const check = (req, res, next)=>{
    let token = req.headers['authorization']
    if(!!token){
        jwt.verify(token, SECRETKEY, (err, decoded)=>{
            if(err){
                res.send({success:false, status:403, message:'Unauthorised'})
            }
            else{
                req.decoded = decoded
                next()
            }
        })
    }else{
        res.send({success:false, status:403, message:'Token Not Found'})
    }
}
module.exports = check

