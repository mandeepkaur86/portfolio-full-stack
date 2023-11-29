const User = require('./userModel')
const bcrypt = require('bcrypt')

const login = (req, res)=>{
    let validation = ''
    if(!req.body.email){
        validation+= 'email is required'
    }
    if(!req.body.password){
        validation+= 'password is required'
    }

    if(!!validation){
        res.send({success:false, status:400, message:validation})
    }
    else{
        User.findOne({email:req.body.email}).exec()
        .then(data=>{
            if(data == null){
                res.send({success:false, status:400, message:"User doesn't exist"})
            }
            else{
                if(bcrypt.compareSync(req.body.password, data.password)){
                    if(data.status){
                        res.send({success:true, status:200, message:"Login Successfull", data:data})
                    }else{
                        res.send({success:false, status:400, message:"Account Inactive"})
                    }
                }
                else{
                    res.send({success:false, status:403, message:"Invalid Credentials"})
                }
            }
        })
        .catch(err => {
            res.send({ success: false, status: 500, message: err.message })
        })
    }
}

module.exports = { login}


