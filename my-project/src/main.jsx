import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import Header from './pages/Header'
// import App from './App'
// import Footer from './pages/Footer'
import Layout from './layout/Layout'
import Home from './landing-page/Home'
import Register from './landing-page/Register'
import LogIn from './landing-page/LogIn'
import AdminLayout from './layout/AdminLayout'
import Crud from './auth/Crud'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' 
      element={
      <Layout>
        <Outlet/>
      </Layout>}
      >
        <Route index element={<Home/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<LogIn/>}></Route>
      </Route>
    </Routes>
    <Routes>
      <Route path='/admin/' 
      element={
        <AdminLayout>
          <Outlet/>
        </AdminLayout>
      }
      >
        <Route path='dashboard/userinfo/' element={<Crud/>}></Route>
      </Route>
    </Routes>


      {/* <main className='max-w-6xl mx-auto p-4'>
        <Header/>
        <App/>
        <Footer/>
      </main> */}
    </BrowserRouter>
  </React.StrictMode>,
)
