import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <>
        <nav className='bg-secondary border-2 border-black/20 rounded-xl h-[600px] w-1/5 flex flex-col gap-6'>
            <h2 className='text-center mt-2'>Slice&Chugs</h2>
            <div className='flex flex-col gap-7 pl-3'>
                <Link to={'/admin'}>
                <span className='mr-2'><ion-icon name="home-outline"></ion-icon></span>
                Dashboard
                </Link>

                <Link to={'/admin'}>
                <span className='mr-2'><ion-icon name="fast-food-outline"></ion-icon></span>
                Manage Menu
                </Link>

                <Link to={'dashboard/userinfo/'}>
                <span className='mr-2'><ion-icon name="people-outline"></ion-icon></span>
                Users
                </Link>

                <Link to={'dashboard/staffinfo'}>
                <span className='mr-2'><ion-icon name="person-add-outline"></ion-icon></span>
                Add Staffs(admins)
                </Link>
            </div>
        </nav>
    </>
  )
}

export default AdminNav