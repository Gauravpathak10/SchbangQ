import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios'
const EditBooks = () => {

    const [title, settitle] = useState([])
    const [author, setauthor] = useState([])
    const [Chapters, setChpters] = useState([])
    const [price, setprice] = useState([])
    const [image, setimg] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/get/${id}`)
            .then((res) => {
                settitle(res.data.data.title)
                setChpters(res.data.data.Chapters)
                setauthor(res.data.data.author)
                setimg(res.data.data.image)
                setprice(res.data.data.price)
            }
            )
            .catch((err) => console.log(err))
    }, [])

    const editbookDetails = (e) => {
        e.preventDefault()
        const data = { title, author, Chapters, image, price }
        axios.put(`http://localhost:5000/edit/${id}`, data)
            .then((res) => {
                console.log(res.data.data)
            }
            )
            .catch((err) => console.log(err))

    }
    return (
        <div className='form-edit'>
            <form>
                <br />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <h1>Edit</h1>
                    <img width='100' src={image} alt="" />
                </div>
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
                    <label htmlFor="image">Price</label>
                    <input type="text" name="price" id="" value={price} placeholder='...price' onChange={(e) => setprice(e.target.value)} />
                </div>
            </form>
            <button className='btn' onClick={editbookDetails}>Update</button>
            <Link to='/books' className='btn'>Go back</Link>
        </div>
    )
}

export default EditBooks