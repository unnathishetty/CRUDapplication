import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deletecourse/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }

  return (
    <div className=' d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-100 bg-white p-5'>
            <Link to="/create" className='btn btn-success '> Add +</Link>
            <table className='table '>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                         users.map((mem, id) => {
                          return <tr key={id}>
                                  <td>{mem.name}</td>
                                  <td>{mem.description}</td>
                                  <td>{mem.price}</td>
                                  <td>
                                    <Link to={`/update/${mem._id}`} className='btn btn-success'>Update</Link>
                                    <button className='btn btn-danger' onClick={(e) => handleDelete(mem._id)}>Delete</button>
                                 </td>
                                </tr>
                          })
                    } 
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users;
