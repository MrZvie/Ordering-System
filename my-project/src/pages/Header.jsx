import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between'>
        <nav className='flex gap-8 items-center text-gray-500 font-semibold'>
        <Link className="text-primary font-semibold text-2xl" to={'/'}>
          Slice&Chugs
        </Link>
          <Link to={''}>Home</Link>
          <Link to={''}>Menu</Link>
          <Link to={''}>About</Link>
          <Link to={''}>Contact</Link>

        </nav>
        <nav className='flex items-center text-gray-500 font-semibold gap-4'>
          <Link to={'/login'}>
            Login
          </Link>
          <Link className='bg-primary text-white rounded-full px-8 py-2' to={"/register"}>
            Register
          </Link>
        </nav>
      </header>
    </>
  )
}

export default Header