const publisherModel = require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let published = req.body
    let pubCreated = await publisherModel.create(published)
    res.send({data: pubCreated})
}

const getPublisher= async function (req, res) {
    let publish = await publisherModel.find()
    res.send({data: publish})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher