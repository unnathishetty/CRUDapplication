import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

function CreateUser() {

    const [name, setName] = useState()
    const [description , setDescription] = useState()
    const [price, setPrice] = useState();

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createcourse", {name, description, price})
        .then(result => { 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-50 bg-white container text-center p-5'>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor=' '>Name</label>
                    <input type="text" placeholder='Course name' className='form-control' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Description</label>
                <input type="text" placeholder='description' className='form-control' onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=' '>Price</label>
                    <input type="text" placeholder='Price' className='form-control' onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser;
