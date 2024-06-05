import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <>
      <header className='flex mx-auto md:items-center md:flex-row w-full md:justify-between'>
        <div className='flex phone:justify-between phone:w-full md:justify-normal md:w-32 items-center'>
          <Link className=" text-primary font-semibold text-xl" to={'/'}>
            Slice&Chugs
          </Link>
          <span className='text-3xl cursor-pointer my-2 md:hidden block'>
            <ion-icon onclick="Menu(this)" name="menu"></ion-icon>
          </span>
        </div>
        <nav className='flex phone:items-center phone:gap-6 phone:justify-center phone:flex-col md:flex-row md:gap-2 text-gray-500 bg-slate-300 md:bg-white md:static left-0 md:w-auto top-[-400px] z-[1] md:z-auto md:py-0 py-4 md:pl-0 pl-7 w-full md:opacity-100 opacity-0 absolute transition-all ease-in duration-500'>
          <Link className='w-20 mx-auto text-center' to={'/'}>
            Home
            </Link>
          <Link className='w-20 mx-auto text-center' to={'menu'}>
            Menu
            </Link>
          <Link className='w-20 mx-auto text-center' to={'about'}>About</Link>
          <Link className='w-20 mx-auto text-center' to={'contact'}>Contact</Link>
          <Link className='btns w-20 flex justify-center items-center mx-auto gap-1' to={'/'}>
            <h2 className='text-gray-500'>Cart</h2>
            <span className='cart text-center my-auto text-primary text-xl'>
              <ion-icon name="bag-handle-outline"></ion-icon>
            </span>
          </Link>
          <div className='grid phone:justify-self-center phone:gap-6 phone:mx-auto phone:justify-items-center phone:content-center md:grid-cols-2 md:place-self-center font-semibold md:gap-1'>
            <Link className='text-center flex items-center justify-center mx-auto w-24' to={'login'}>
              Login
            </Link>
            <Link className='bg-primary w-24 h-9 text-center flex items-center justify-center mx-auto text-white rounded-full px-8 py-2' to={"register"}>
              Register
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header