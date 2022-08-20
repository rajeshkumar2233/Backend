const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "Author"
    },
    publisher: {
        type: ObjectId,
        ref: "Publisher"
    },
    price: Number,
    ratings: Number,
    HardCover : {type :Boolean, default : false}


}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema)