const Feedback = require('./feedbackModel')

const add = async (req, res) => {
    let validation = ""
    if (!req.body.feedback)
        validation += "feedback is Required"
    if (!req.body.themeId)
        validation += "themeId is Required"
    if (!req.body.userId)
        validation += "userId is Required"

    if (!!validation)
        res.send({ success: false, status: 400, message: validation })
    else {
        let total = await Feedback.countDocuments()
        let newFeedback = new Feedback()
        newFeedback.autoId = total + 1
        newFeedback.feedback = req.body.feedback
        newFeedback.themeId = req.body.themeId
        newFeedback.userId = req.body.userId

        newFeedback.save()
            .then((feedbackData) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "New Feedback Created",
                    data: feedbackData
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
    Feedback.find(req.body)
    .populate('storyId')
    .populate('userId').exec()
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
        Feedback.findOne({ _id: req.body._id })
        .populate('storyId')
        .populate('userId')
        .exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: 'Feedback Not Found' })
                else
                    res.send({ success: true, status: 200, message: 'Single Document Loaded', data: data })

            })
            .catch(err => {
                res.send({ success: false, status: 500, message: err.message })
            })

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
        Feedback.findOne({ _id: req.body._id })
            .exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: "Feedback does not exist" })
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




module.exports = { add, all, single, deletion }
