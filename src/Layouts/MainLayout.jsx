import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Utils/Navbar'
import Footer from '../Pages/Components/Footer'

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout