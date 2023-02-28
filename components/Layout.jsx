import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children ,navrelative =false }) {
    return (
        <>
            <Navbar navrelative={navrelative} />
            {children}
            <Footer />
        </>
    )
}

export default Layout