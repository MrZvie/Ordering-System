import React, { useState } from 'react'
import google from '../img/google.png'
import Service from '../Service'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUsers =(e) => {
    e.preventDefault();
    const users ={name, email, password};

    Service.addUser(users).then((response) =>{
      console.log(response.data)
    }).catch(error => console.log(error))
  }

  return (
    <section className='bg-secondary max-w-sm mx-auto rounded-xl block mt-8'>
      <h1 className='text-center italic text-primary text-4xl mb-4'>
        Register        
      </h1>
      <form className='block max-w-xs mx-auto'>
        <input type="text" className='pl-2' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
        <input type="email" className='pl-2'  onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' />
        <input type="password" className='pl-2'  onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' />
        <button onClick={createUsers} type='submit'>Register</button>
        <div className='text-center my-4 text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center'>
          <img src={google} alt="" width={24} height={24}/>
          Login with Google
          </button>
      </form>
      
    </section>
  )
}

export default Register