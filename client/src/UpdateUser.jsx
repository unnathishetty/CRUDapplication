import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdateUser() {

    const {id} = useParams()    //extracting the id

    const [name, setName] = useState()
    const [description , setDescription] = useState()
    const [price, setPrice] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getuser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setDescription(result.data.description)
            setPrice(result.data.price)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/updatecourse/"+id, {name, description, price})
        .then(result => { 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-50 bg-white p-5'>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor=' '>Name</label>
                    <input type="text" placeholder='Course name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Description</label>
                    <input type="text" placeholder='description' value={description} className='form-control' onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Price</label>
                    <input type="text" placeholder='Price' value={price} className='form-control' onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser;
