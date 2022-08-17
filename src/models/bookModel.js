const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        bookName: {
            type: String,
            required: true
        },
        authorName: {
            type: String, required: true
        },
       
        tags: String,

        

        yearOfPublish: Number,

        price: {
            indianPrice: String,
            europianPrice: String
        },

        totalPages: Number,

        stockAvailable: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model("1-Book", bookSchema);