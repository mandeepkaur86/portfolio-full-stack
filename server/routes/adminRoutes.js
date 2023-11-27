const express = require('express')
const router = express.Router()
const themeController = require('../apis/theme/themeController')


// theme routes
router.post('/theme/add', themeController.add)
router.post('/theme/all', themeController.all)
router.post('/theme/single', themeController.single)
router.post('/theme/update', themeController.update)
router.post('/theme/delete', themeController.deletion)
// theme routes

router.all('*',(req, res)=>{
    res.send({
        success:false,
        status:404,
        message:"Invalid Address"
    })
})

module.exports = router

