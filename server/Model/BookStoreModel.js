import mongoose from "mongoose";

const { Schema } = mongoose;
const BookSchema = Schema({
    title: {
        type: String,
        required: [true, "Title can't be blank"]
    },
    image: {
        type: String,
        required: [true, "ImageUrl can't be blank"],
        default: 'https://static01.nyt.com/images/2022/06/13/books/12BOOKZIEGLER1/12BOOKZIEGLER1-jumbo.png'
    },
    price: {
        type: Number,
        required: [true, "Price can't be blank"],
    },
    author: {
        type: String,
        required: [true, "Author name can't be blank"]
    },
    Chapters: [String],
    dateOfPublication: {
        type: String,
        default: Date

    }

}, { timestamps: true })



const BookStore = mongoose.model('Books', BookSchema)

export default BookStore;