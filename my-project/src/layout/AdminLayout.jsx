import React from 'react'
import Footer from '../pages/Footer'
// import Crud from '../auth/Crud'

const AdminLayout = ({children}) => {
  return (
    <main className='max-w-6xl mx-auto p-4'>
        {children}
        <Footer/>
    </main>
  )
}

export default AdminLayout