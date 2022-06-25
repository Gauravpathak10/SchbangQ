import express from 'express'
import { CreateBook, DeleteBook, DiscountOffer, EditBook, FindAllBooks, SpecificBookDetails } from '../Controllers/BookStoreController'
const BookStore = express.Router()

BookStore.post('/Add', CreateBook)
BookStore.get('/get', FindAllBooks)
BookStore.get('/get/:id', SpecificBookDetails)
BookStore.put('/edit/:id', EditBook)
BookStore.put('/discount/:id/:price', DiscountOffer)
BookStore.delete('/delete/:id', DeleteBook)

export default BookStore;