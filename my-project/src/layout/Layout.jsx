import React from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'

const Layout = ({ children }) => {
    return (
        <>
            <main className='max-w-6xl mx-auto p-4'>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout