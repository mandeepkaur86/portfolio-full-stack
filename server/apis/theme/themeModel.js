
const mongoose = require('mongoose')
const themeSchema = new mongoose.Schema({
    autoId:{type:Number, default:0},
    name:{type:String, default:''},
    image:{type:String, default:'theme/no_img.png'},
    description:{type:String, default:''},
    createdAt:{type:Date, default:Date.now},
    status:{type:Boolean, default:true}
})

module.exports = mongoose.model('theme', themeSchema)

