const User = require('../user/userModel')
const Reader = require('./readerModel.js')
const bcrypt = require('bcrypt')

const register =async (req, res)=>{
    let validation = ''
    if(!req.body.name){
        validation += 'name is required '
    }
    if(!req.body.email){
        validation += 'email is required '
    }
    if(!req.body.password){
        validation += 'password is required '
    }
    if(!req.body.contact){
        validation += 'contact is required '
    }

    if(!!validation){
        res.send({success:false, status:500, message:validation})
    }
    else{
        let prevUser = await User.findOne({email:req.body.email})
        if(!!prevUser){
            res.send({success:false, status:500, message:"Email already exists"})
        }   
        else{
            let total = await User.countDocuments()
            let user = new User()
            user.autoId = total+1
            user.name = req.body.name
            user.email = req.body.email
            user.password = bcrypt.hashSync(req.body.password, 10)
            user.save()
            .then(async data=>{
                let total =await Reader.countDocuments()
                let reader = new Reader()
                reader.autoId = total +1
                reader.name = req.body.name
                reader.email = req.body.email
                reader.contact = req.body.contact
                reader.userId = data._id
                reader.save()
                .then(savedReader =>{
                    res.send({success:true, status:200, message:"New Account Created", data:data})
                })
                .catch(err=>{
                    res.send({success:false, status:500, message:err.message})
                })
            })
            .catch((err)=>{
                res.send({success:false, status:500, message:err.message})
            })
        }
    }
}

const all = (req, res) => {
    req.body.status = true
    Reader.find(req.body)
    .populate('userId').exec()
        .then(data => {
            res.send({
                success: true,
                status: 200,
                message: "All Documents Loaded",
                total: data.length,
                data: data
            })
        })
        .catch(err => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}

const single = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required'

    if (!!validation)
        res.send({
            success: false,
            status: 400,
            message: validation
        })
    else
        Reader.findOne({ userId: req.body._id })
        .populate('userId').exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: 'Reader Not Found' })
                else
                    res.send({ success: true, status: 200, message: 'Single Document Loaded', data: data })

            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })

}
const update = (req, res)=>{
    let validation = ''
    if (!req.body._id)
        validation += '_id is required'

    if (!!validation)
        res.send({
            success: false,
            status: 400,
            message: validation
        })
    else{
        User.findOne({ _id: req.body._id }).exec()
            .then(async data => {
                let prevUser =await User.findOne({$and:[{email:req.body.email},{_id:{$ne:req.body._id}}]})
                if(!!prevUser){
                    res.send({ success: false, status: 400, message:"Email Already Exists" })
                }
                else{
                    if(!!req.body.name) data.name = req.body.name
                    if(!!req.body.email) data.email = req.body.email

                    data.save().then(savedUser=>{
                        Reader.findOne({userId:req.body._id}).exec()
                        .then(readerData=>{
                            if(!!req.body.name) readerData.name = req.body.name
                            if(!!req.body.email) readerData.email = req.body.email
                            if(!!req.body.contact) readerData.contact = req.body.contact
                            readerData.save().then(savedReader=>{
                                res.send({ success: true, status: 200, message: "Profile Updated", data:savedReader })
                            }).catch(err => {
                                res.send({ success: false, status: 500, message: err.message })
                            })
                        })
                        .catch(err => {
                            res.send({ success: false, status: 500, message: err.message })
                        })
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
        

}


module.exports = { register, all, single, update }




