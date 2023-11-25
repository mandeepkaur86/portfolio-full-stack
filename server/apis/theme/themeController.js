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
module.exports = { add, all }




