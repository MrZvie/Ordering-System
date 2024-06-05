import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
      {/* <main className='max-w-6xl mx-auto p-4'>
        <Header/>
        <App/>
        <Footer/>
      </main> */}
    </BrowserRouter>
  </React.StrictMode>,
)
