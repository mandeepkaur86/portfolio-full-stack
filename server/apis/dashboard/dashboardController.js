const Theme = require('../theme/themeModel')
const User = require('../user/userModel')
const Story = require('../story/storyModel')
const Feedback = require('../feedback/feedbackModel')

const dashboard =async (req, res)=>{
    let totalThemes = await Theme.find({status:true})
    let totalUsers = await User.find({status:true, userType:2})
    let totalStories = await Story.find({status:true})
    let totalFeedbacks = await Feedback.find({status:true})

    res.send({success:true, status:200, message:"Dashboard Loaded", data:{
        totalThemes: totalThemes.length,
        totalUsers: totalUsers.length,
        totalStories: totalStories.length,
        totalFeedbacks: totalFeedbacks.length,
    }})
}

module.exports = {
    dashboard
}
