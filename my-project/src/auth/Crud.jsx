import React from 'react'
import Service from '../Service';
import { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";


const Crud = () => {
    const navigate = useNavigate();
    const [user, setUsers] = useState([])
    const retrieveUser = () => {
        Service.getUser().then(response => {
            setUsers(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        retrieveUser()
    }, [])

    const removeUsers = (id) => {
        Service.deleteUser(id).then(response => {
            retrieveUser()
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const getUserId = (id) => {
        navigate("update/" + id)
        Service.getUserId(id).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='max-h-full'>
            <div className='flex justify-evenly pt-5'>
                <Link to={'/login'} className='flex border text-white flex-row justify-center items-center bg-primary rounded-full w-20'>
                    <IoMdArrowRoundBack className='w-5 h-5' />
                    Back
                </Link>
                <h2 className='text-3xl'>Users Info</h2>
                <div>
                </div>
            </div>
            <div className='flex text-white bg-primary items-center mt-4 h-9 justify-center'>
                <table className='table-fixed w-full'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th className='size_edit text-center'>Edit</th>
                            <th className='size_delete text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='text-center'><button className='forEdit' onClick={() => getUserId(user.id)} ><MdEdit className='edit' /></button></td>
                                    <td className='text-center'><button className='forDelete' onClick={() => removeUsers(user.id)} ><MdDelete className='delete' /></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Crud