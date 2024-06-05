import React from 'react'
import { Link } from 'react-router-dom'


const LogIn = (setShowLogin) => {

  return (
    <section className='bg-secondary max-w-sm max-h-96 mx-auto rounded-xl block mt-8'>
      <h1 className='text-center italic text-primary text-4xl mb-4'>
        Login    
      </h1>
      <form className='block max-w-xs min-h-44 mx-auto'>
        <input type="email" required className='pl-2' placeholder='Enter Email' />
        <input type="password" required className='pl-2' placeholder='Enter Password' />
        <Link to={'/'}>
          <button className='mt-5' onClick={() => setShowLogin(true)} type='submit'>
            Login
          </button>
        </Link>
      </form>
      
    </section>
  )
}

export default LogIn