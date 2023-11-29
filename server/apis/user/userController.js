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
const changePassword = (req, res)=>{
    let validation = ''
    if(!req.body._id){
        validation+= 'email is required'
    }
    if(!req.body.currPassword){
        validation+= 'Current password is required'
    }
    if(!req.body.newPassword){
        validation+= 'New password is required'
    }

    if(!!validation){
        res.send({success:false, status:400, message:validation})
    }
    else{
        User.findOne({_id:req.body._id}).exec()
        .then(data=>{
            if(data == null){
                res.send({success:false, status:400, message:"User doesn't exist"})
            }
            else{
                if(bcrypt.compareSync(req.body.currPassword, data.password)){
                    data.password = bcrypt.hashSync(req.body.newPassword, 10)
                    data.save()
                    .then(saved=>{
                        res.send({ success: true, status:200, message: "Password Updated" })
                    })
                    .catch(err => {
                        res.send({ success: false, status: 500, message: err.message })
                    })
                }
                else{
                    res.send({ success: false, status: 400, message: "Current Password Does not match" })
                }
            }
        })
        .catch(err => {
            res.send({ success: false, status: 500, message: err.message })
        })
    }
}



const changeStatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required'
    if (!req.body.status)
        validation += 'status is required'

    if (!!validation)
        res.send({
            success: false,
            status: 400,
            message: validation
        })
    else
        User.findOne({ _id: req.body._id })
            .exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: "User does not exist" })
                else {
                    data.status = req.body.status
                    data.save()
                        .then(() => {
                            res.send({ success: true, status: 200, message: "User Status Changed" })
                        })
                        .catch(err => {
                            res.send({ success: false, status: 500, message: err.message })
                        })
                }
            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })
}


module.exports = { login, changePassword, changeStatus}





