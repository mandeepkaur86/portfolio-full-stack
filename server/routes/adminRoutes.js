const express = require('express')
const router = express.Router()
const multer = require('multer')
const themeController = require('../apis/theme/themeController')
const storyController = require('../apis/story/storyController')
const feedbackController = require('../apis/feedback/feedbackController')
const readerController = require('../apis/reader/readerController')
const userController = require('../apis/user/userController')


router.post('/login', userController.login)
router.post('/changePassword', userController.changePassword)


//reader routes
router.post('/reader/all', readerController.all)
router.post('/reader/single', readerController.single)
router.post('/reader/changeStatus', userController.changeStatus)
//reader routes


// theme routes
const themeStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'server/public/theme')
    },
    filename:(req, file, cb)=>{
        var pic_name = Date.now()+file.fieldname + "-"+ file.originalname
        cb(null, pic_name)
    }
})
const themeUpload = multer({storage:themeStorage})
router.post('/theme/add', themeUpload.single('image') ,themeController.add)
router.post('/theme/all', themeController.all)
router.post('/theme/single', themeController.single)
router.post('/theme/update',themeUpload.single('image'), themeController.update)
router.post('/theme/delete', themeController.deletion)
// theme routes

// story routes
const storyStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'server/public/story')
    },
    filename:(req, file, cb)=>{
        var pic_name = Date.now()+file.fieldname + "-"+ file.originalname
        cb(null, pic_name)
    }
})
const storyUpload = multer({storage:storyStorage})
router.post('/story/add', storyUpload.single('image'), storyController.add)
router.post('/story/all', storyController.all)
router.post('/story/single', storyController.single)
router.post('/story/update', storyUpload.single('image'), storyController.update)
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

