const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    autoId: {type:Number, default:0},
    name: {type:String, default:''},
    email: {type:String, default:''},
    password: {type:String, default:''},
    userType: {type:Number, default:2}, // 1 - Admin, 2 - Reader
    createdAt:{ type:Date, default:Date.now()},
    status:{type:Boolean, default:true}
})

module.exports = new mongoose.model('user', userSchema)
