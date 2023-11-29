const mongoose = require('mongoose')
const feedbackSchema = new mongoose.Schema({
    autoId:{type:Number, default:0},
    feedback:{ type:String, default:''},
    storyId:{ type:mongoose.Schema.Types.ObjectId, default:null, ref:'story'},
    userId:{ type:mongoose.Schema.Types.ObjectId, default:null, ref:'user'},
    createdAt:{type:Date, default:Date.now},
    status:{type:Boolean, default:true}
})

module.exports = mongoose.model('feedback', feedbackSchema)

