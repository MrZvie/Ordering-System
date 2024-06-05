import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './landing-page/Home'
import Register from './landing-page/Register'
import LogIn from './landing-page/LogIn'
import AdminLayout from './layout/AdminLayout'
import Crud from './auth/Crud'
import Update from './auth/Update'
import HomeMenu from './pages/HomeMenu';
import About from './pages/About';
import Contact from './landing-page/Contact';
import Header from './pages/Header'
import AdminDashboard from './auth/AdminDashboard'
import AddStaff from './auth/Admin _Parts/AddStaff'
const App = () => {
    const [showLogin, setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LogIn/>:<></>}
    
        <Routes>
          <Route path='/'
          element={
          <Layout>
            <Outlet/>
          </Layout>}
          >
            <Route index element={<Home/>}></Route>
            <Route path='menu' element={<HomeMenu/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='login'  element={<LogIn setShowLogin={setShowLogin} />}></Route>
          </Route>
        </Routes>
        <Routes>
          <Route path='admin/'
          element={
            <AdminLayout>
              <Outlet/>
            </AdminLayout>
          }
          >
            <Route index element={<AdminDashboard/>}></Route>
            <Route path='dashboard/userinfo/' element={<Crud/>}></Route>
            <Route path='dashboard/staffinfo' element={<AddStaff/>}></Route>
            <Route path='dashboard/userinfo/update/:id' element={<Update/>}></Route>
          </Route>
        </Routes>
    </>
  )
}

export default App