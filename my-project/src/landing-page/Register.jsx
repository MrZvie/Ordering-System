import React from 'react'
import google from '../img/google.png'

const Register = () => {
  return (
    <section className='mt-8'>
      <h1 className='text-center italic text-primary text-4xl mb-4'>
        Register        
      </h1>
      <form className='block max-w-xs mx-auto'>
        <input type="text" placeholder='Enter Name' />
        <input type="email" placeholder='Enter Email' />
        <input type="password" placeholder='Enter Password' />
        <button type='submit'>Register</button>
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