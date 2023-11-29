const mongoose = require('mongoose')

const readerSchema = new mongoose.Schema({
    autoId: {type:Number, default:0},
    name: {type:String, default:''},
    email: {type:String, default:''},
    contact: {type:String, default:''},
    userId: {type:mongoose.Schema.Types.ObjectId, default:null, ref:'user'},
    createdAt:{ type:Date, default:Date.now()},
    status:{type:Boolean, default:true}
})

module.exports = new mongoose.model('reader', readerSchema)

