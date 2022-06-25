import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import GetBooks from './GetBooks'

const Books = () => {
const logOut=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('User')
}
    return (
        <>
            <div className='Nav'>
                <div>
                    <h1>SchbangQ BookStore</h1>
                </div>
                <div>
                    <Link to='/add'>Add Book</Link>
                    &nbsp;
                    <Link to='/' onClick={logOut}>Log out</Link>
                </div>
            </div>
            <GetBooks />
        </>
    )
}

export default Books