import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import BookStore from './Routes/BookStoreRoute'
import UserRoute from './Routes/UserRoute'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/', BookStore)
app.use('/', UserRoute)
mongoose.connect('mongodb://localhost:27017/BookStore')
    .then(() => console.log('mongoDB running'))
    .catch((err) => console.log(err))


app.listen(5000, () => {
    console.log('App Running')
})