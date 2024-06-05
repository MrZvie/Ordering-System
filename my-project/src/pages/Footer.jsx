import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t-2 text-gray-500 mt-16 p-8'>
      <div className='flex justify-evenly gap-5'>
        <span className='text-3xl text-blue-900'><ion-icon name="logo-facebook"></ion-icon></span>
        <span className='text-3xl text-red-700'><ion-icon name="logo-instagram"></ion-icon></span>
        <span className='text-3xl text-black'><ion-icon name="logo-github"></ion-icon></span>
        <span className='text-3xl text-primary'><ion-icon name="logo-youtube"></ion-icon></span>
      </div>
      <div className='w-full text-center'>
        <a className='hover:text-primary' href="">
          Slice&Chugs
        </a>
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer