const Theme = require('./themeModel')

const add = async (req, res) => {
    let validation = ""
    if (!req.body.name)
        validation += "name is Required"
    if (!req.body.description)
        validation += "description is Required"

    if (!!validation)
        res.send({ success: false, status: 400, message: validation })
    else {
        let total = await Theme.countDocuments()
        let newTheme = new Theme()
        newTheme.autoId = total + 1
        newTheme.name = req.body.name
        newTheme.description = req.body.description

        newTheme.save()
            .then((themeData) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "Account Created",
                    data: themeData
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
    Theme.find(req.body).exec()
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
        Theme.findOne({ _id: req.body._id }).exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: 'Theme Not Found' })
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
        Theme.findOne({ _id: req.body._id }).exec()
            .then(data => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "Theme does not exist" })
                }
                else {
                    if(!req.body.name) data.name = req.body.name
                    if(!req.body.description) data.description = req.body.description

                    data.save()
                        .then(savedData => {
                            res.send({ success: true, status: 200, message: "Catgeory Updated", data: savedData })
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
        Theme.findOne({ _id: req.body._id })
            .exec()
            .then(data => {
                if (data == null)
                    res.send({ success: false, status: 500, message: "Theme does not exist" })
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






