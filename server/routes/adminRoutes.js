const express = require('express')
const router = express.Router()
const themeController = require('../apis/theme/themeController')
const storyController = require('../apis/story/storyController')
const feedbackController = require('../apis/feedback/feedbackController')



// theme routes
router.post('/theme/add', themeController.add)
router.post('/theme/all', themeController.all)
router.post('/theme/single', themeController.single)
router.post('/theme/update', themeController.update)
router.post('/theme/delete', themeController.deletion)
// theme routes
// story routes
router.post('/story/add', storyController.add)
router.post('/story/all', storyController.all)
router.post('/story/single', storyController.single)
router.post('/story/update', storyController.update)
router.post('/story/delete', storyController.deletion)
// story routes
// feedback routes
router.post('/feedback/all', feedbackController.all)
router.post('/feedback/single', feedbackController.single)
router.post('/feedback/delete', feedbackController.deletion)
// feedback routes


router.all('*',(req, res)=>{
    res.send({
        success:false,
        status:404,
        message:"Invalid Address"
    })
})

module.exports = router

