import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const GetBooks = () => {
    const [data, setdata] = useState([])
    const [disable, setDisable] = useState();



    useEffect(() => {
        axios.get('http://localhost:5000/get')
            .then((res) => setdata(res.data.data))
            .catch((err) => console.log(err))
    }, [disable])

    const Discount = (e) => {
        const price = data.map(list => list.price - list.price * 30 / 100)
        axios.patch(`http://localhost:5000/discount/${e.target.id}/${price[0]}`)
            .then((res) => {
                setDisable(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleted = (e) => {
        console.log(e.target.id)
        axios.delete(`http://localhost:5000/delete/${e.target.id}`)
            .then((res) => {
                console.log(res)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div className='d-flex'>
                {data.map((list, i) => {
                    return (
                        <div className='Book-card' key={i}>
                            <div>
                                <img src={list.image} alt="" />
                            </div>
                            <div>
                                <li>Title :{list.title}</li>
                                <li>author :{list.author}</li>
                                <li>Chapters :{list.Chapters}</li>
                                <li>Date Of Publish :{list.dateOfPublication.split(0, 1)}</li>
                                <li>Price: {list.price}Rupees</li>
                                <button disabled={disable} id={list._id} onClick={Discount}>30% discount</button>
                                <div style={{ display: "flex", Alignitems: "center", justifyContent: "end" }}>
                                    <Link to={`/Edit/${list._id}`} className='btn'>View</Link>
                                    <button className='btn' id={list._id} onClick={deleted}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default GetBooks
