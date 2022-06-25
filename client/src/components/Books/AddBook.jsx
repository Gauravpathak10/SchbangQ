import React, { useState } from 'react'
import axios from 'axios'

const AddBook = () => {
    const [title, settitle] = useState([])
    const [author, setauthor] = useState([])
    const [Chapters, setChpters] = useState([])
    const [price, setprice] = useState([])
    const [image, setimg] = useState('')

    const AddbookDetails = (e) => {
        e.preventDefault()
        const data = { title, author, Chapters, image, price }
        if (title == '' || author == '' || Chapters == '' || image == '' || price == '') {
            return alert('All field required')
        }
        axios.post(`http://localhost:5000/Add`, data)
            .then((res) => {
                console.log(res)
                window.location.href = '/books'
            }
            )
            .catch((err) => console.log(err))

    }
    return (
        <div className='form-edit'>
            <form>
                <br />
                <h1>Add Book</h1>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder='...title' id="" value={title} onChange={(e) => settitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="" placeholder='...author' value={author} onChange={(e) => setauthor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Chapters</label>
                    <input type="text" name="Chapters" id="" value={Chapters} placeholder='...chapters,chapter,' onChange={(e) => setChpters(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="image">ImageUrl</label>
                    <input type="text" name="image" id="" value={image} placeholder='...imageUrl' onChange={(e) => setimg(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="" value={price} placeholder='...price' onChange={(e) => setprice(e.target.value)} />
                </div>
            </form>
            <button className='btn-add' onClick={AddbookDetails}>Add </button>
        </div>
    )
}

export default AddBook