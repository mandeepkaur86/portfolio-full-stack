const express = require('express')
const router = express.Router()
const themeController = require('../apis/theme/themeController')
const storyController = require('../apis/story/storyController')
const feedbackController = require('../apis/feedback/feedbackController')


// theme routes
router.post('/theme/all', themeController.all)
router.post('/theme/single', themeController.single)
// theme routes

// story routes
router.post('/story/all', storyController.all)
router.post('/story/single', storyController.single)
// story routes

// feedback routes
router.post('/feedback/add', feedbackController.add)
router.post('/feedback/all', feedbackController.all)
router.post('/feedback/single', feedbackController.single)
// feedback routes



router.all('*',(req, res)=>{
    res.send({
        success:false,
        status:404,
        message:"Invalid Address"
    })
})

module.exports = router

