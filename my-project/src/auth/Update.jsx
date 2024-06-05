import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Service from '../Service';
import Exit from '../img/icons/Exit';

const Update = () => {
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

    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    Service.updateUser(id).then(response => {
        setName(response.data.name)
        setEmail(response.data.email)
    }).catch(error => {
        console.log(error)
    })

    return (
        <div className='fixed inset-0 bg-black opacity-80 backdrop-blur-xl flex justify-center items-center'>
            <div className=" bg-slate-300 w-72 h-auto text-black p-2 rounded-2xl">
                <div className='flex flex-col-reverse gap-1 mb-3'>
                    <h3 className='text-center'>Update User Info</h3>
                    <div className=' w-full h-11  border-primary border-none flex  justify-end items-center' >
                        <Link to={'http://localhost:5173/admin/dashboard/userinfo/'}>
                            <button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center'>
                                <Exit />
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <form>
                        <input type="text" className='pl-2' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
                        <input type="email" className='pl-2' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' />
                    </form>
                </div>
                <div className='flex justify-center gap-3'>
                    <Link to={'http://localhost:5173/admin/dashboard/userinfo/'}><button className='hover:bg-primary border-primary hover:text-white w-24'>
                        Cancel
                    </button></Link>
                    <button onClick={() => updateUser(user.id)} className='hover:bg-primary border-primary hover:text-white w-24'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Update