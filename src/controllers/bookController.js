const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async function (req, res) {
    const data = req.body;
    const authorId = req.body.author
    const publisherId = req.body.publisher

    if (!data.author && !data.publisher) {
        (res.send({ msg: "Please Fill the required fields Author & Publisher details!!" }))
    } else if (!data.author) {
        (res.send({ msg: "Please Fill the required fields Author Details!!" }))                                             //3a 
    } else if (!data.publisher) {
        (res.send({ msg: "Please Fill the required fields Publisher Details!!" }))                                          //3c
    } else {

        const theauthor = await authorModel.findById(authorId)
        const thepublisher = await publisherModel.findById(publisherId)

        if (!theauthor) { 
            res.send({ msg: "Author not Found" })

        } else if (!thepublisher) {
            res.send({ msg: "Publisher not Found" })

        } else {

            const bookData = await bookModel.create(data)
            res.send({ msg: bookData })
        }
    } {
        
    }

}
const getBooksWithAuthorDetails = async function (req, res) {
        const bookDetail = await bookModel.find().populate('author','publisher')
           
        res.send({ msg: bookDetail })
    }

const getBooksbyPublishers = async function (req, res) {
    await publisherModel.find(
        { publisherName: { $in: ["Penguine", "Harper Collins"] } }).updateMany({ $set: { isHardCover: true } })
    
};

const getAuthorsWithRatings = async function (req, res) {
    const ratedAuthorId = await authorModel.find(
        { rating: { $gt: 3.5 } }).select({ _id: 1 })

    await bookModel.updateMany(
        { author: ratedAuthorId }, { $inc: { price: 10 } }, { new: true })

    const finalUpdates = await bookModel.find()

    res.send({ msg: finalUpdates })

};

module.exports.createBook = createBook;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.getBooksbyPublishers = getBooksbyPublishers;
module.exports.getAuthorsWithRatings = getAuthorsWithRatings;