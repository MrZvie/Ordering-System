import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './pages/Header'
import App from './App'
import Footer from './pages/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='max-w-6xl mx-auto p-4'>
        <Header/>
        <App/>
        <Footer/>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
