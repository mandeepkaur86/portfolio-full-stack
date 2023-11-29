const Story = require('./storyModel')

const add = async (req, res) => {
    let validation = ""
    if (!req.body.name)
        validation += "name is Required"
    if (!req.body.description)
        validation += "description is Required"
    if (!req.body.author)
        validation += "author is Required"
    if (!req.body.story)
        validation += "story is Required"
    if (!req.body.themeId)
        validation += "themeId is Required"

    if (!!validation)
        res.send({ success: false, status: 400, message: validation })
    else {
        let total = await Story.countDocuments()
        let newStory = new Story()
        newStory.autoId = total + 1
        newStory.name = req.body.name
        newStory.description = req.body.description
        newStory.author = req.body.author
        newStory.story = req.body.story
        newStory.themeId = req.body.themeId

        newStory.save()
            .then((storyData) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "New Story Created",
                    data: storyData
                })
            })
            .catch((error) => {
                res.send({
                    success: false,
                    status: 500,
                    message: error.message
                })
            })
    }

}

const all = (req, res) => {
    req.body.status = true
    Story.find(req.body)
    .populate('themeId').exec()
        .then(data => {
            res.send({
                success: true,
                status: 200,
                message: "All Documents Loaded",
                total: data.length,
                data: data
            })
        })
        .catch(err => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}

const single = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required'

    if (!!validation)
        res.send({
            success: false,
            status: 400,
            message: validation
        })
    else
        Story.findOne({ _id: req.body._id })
        .populate('themeId').exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: 'Story Not Found' })
                else
                    res.send({ success: true, status: 200, message: 'Single Document Loaded', data: data })

            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })

}


const update = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required'

    if (!!validation)
        res.send({ success: false, status: 400, message: validation })
    else {
        Story.findOne({ _id: req.body._id }).exec()
            .then(data => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "Story does not exist" })
                }
                else {
                    if(!!req.body.name) data.name = req.body.name
                    if(!!req.body.description) data.description = req.body.description
                    if(!!req.body.author) data.author = req.body.author
                    if(!!req.body.story) data.story = req.body.story
                    if(!!req.body.themeId) data.themeId = req.body.themeId

                    data.save()
                        .then(savedData => {
                            res.send({ success: true, status: 200, message: "Story Updated", data: savedData })
                        }).catch(err => {
                            res.send({ success: false, status: 500, message: err.message })
                        })
                }

            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}

const deletion = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is required'

    if (!!validation)
        res.send({
            success: false,
            status: 400,
            message: validation
        })
    else
        Story.findOne({ _id: req.body._id })
            .exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: "Story does not exist" })
                else {
                    data.status = false
                    data.save()
                        .then(() => {
                            res.send({ success: true, status: 200, message: "Document Deleted" })
                        })
                        .catch(err => {
                            res.send({ success: false, status: 500, message: err.message })
                        })
                }
            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })
}




module.exports = { add, all, single, update, deletion }



