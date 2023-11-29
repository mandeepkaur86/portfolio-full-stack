const mongoose = require('mongoose')
const storySchema = new mongoose.Schema({
    autoId:{type:Number, default:0},
    name:{type:String, default:''},
    image:{type:String, default:''},
    description:{type:String, default:''},
    author:{ type:String, default:''},
    story:{ type:String, default:''},
    themeId:{ type:mongoose.Schema.Types.ObjectId, default:null, ref:'theme'},
    createdAt:{type:Date, default:Date.now},
    status:{type:Boolean, default:true}
})

module.exports = mongoose.model('story', storySchema)
