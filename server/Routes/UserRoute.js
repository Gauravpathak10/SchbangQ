import express from 'express'
import { CreateUserAccount, LoginUser, ProfileDetails } from '../Controllers/UserController'
const UserRoute = express.Router()

UserRoute.post('/register', CreateUserAccount)
UserRoute.post('/login', LoginUser)
UserRoute.get('/profile/:id', ProfileDetails)


export default UserRoute;