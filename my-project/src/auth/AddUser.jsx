import React, { useState } from 'react'
import Service from '../Service'
import Exit from '../img/icons/Exit'

const AddUser = ({ closeAdd }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUsers = (e) => {
        e.preventDefault();
        const users = { name, email, password };

        Service.addUser(users).then((response) => {
            console.log(response.data)
        }).catch(error => console.log(error))
    }

    return (
        <div className='fixed inset-0 bg-black opacity-95 z-10 backdrop-blur-xl flex justify-center items-center'>
            <div className=" bg-slate-300 w-72 blur-none h-auto opacity-100 text-black p-2 rounded-2xl">
                <div className='flex flex-col-reverse gap-1 mb-3'>
                    <h3 className='text-center absolute top-5 right-0 left-0'>Add New User</h3>
                    <div className=' w-full h-11 flex justify-end items-center' >
                        <button onClick={() => closeAdd(false)} className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center'>
                            <Exit />
                        </button>
                    </div>
                </div>
                <div>
                    <form className='block max-w-xs mx-auto'>
                        <input type="text" className='pl-2' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
                        <input type="email" className='pl-2' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' />
                        <input type="password" className='pl-2' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' />
                    </form>
                </div>
                <div className='flex justify-center gap-3'>
                    <button className='hover:bg-primary hover:text-white w-44' onClick={() => closeAdd(false)}>Cancel</button>
                    <button className='w-44 mx-auto hover:bg-orange-600' onClick={createUsers} type='submit'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default AddUser