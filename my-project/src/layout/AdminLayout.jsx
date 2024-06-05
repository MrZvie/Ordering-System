import React from 'react'
import Footer from '../pages/Footer'
import AdminNav from '../auth/Admin _Parts/AdminNav'
// import Crud from '../auth/Crud'

const AdminLayout = ({children}) => {
  return (
    <main className='mx-auto flex gap-10 p-4'>
      <AdminNav/>
        {children}
    </main>
  )
}

export default AdminLayout