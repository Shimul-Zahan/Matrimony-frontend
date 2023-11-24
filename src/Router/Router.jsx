import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';
import Error from '../Pages/RegularPages/Error';
import Home from '../Pages/RegularPages/Home';
import Biodatas from '../Pages/RegularPages/Biodatas';
import Login from '../Pages/RegularPages/Login';
import Registration from '../Pages/RegularPages/Registration';
import DashboardLayout from '../Layouts/DashboardLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/biodata',
                element: <Biodatas />
            },
            {
                path: '/about-us',
                element: <h1>About Us</h1>
            },
            {
                path: '/contact-us',
                element: <h1>Contact Us</h1>
            },
            {
                path: '/signin',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
        // user route
            {
                path: 'edit-biodata',
                element: <h1>Edit Biodata</h1>
            },
            {
                path: 'view-biodata',
                element: <h1>View Biodata</h1>
            },
            {
                path: 'my-contact-request',
                element: <h1>My Contact Request</h1>
            },
            {
                path: 'favourites-biodata',
                element: <h1>Favourites Biodata</h1>
            },
            // admin route
            {
                path: 'admin-dashboard',
                element: <h1>Admin Dashboard</h1>
            },
            {
                path: 'manage-users',
                element: <h1>Manage Users</h1>
            },
            {
                path: 'approved-premium',
                element: <h1>Approved Premium</h1>
            },
            {
                path: 'approve-contact-request',
                element: <h1>Approved Contact Request</h1>
            },
        ]
    }
])

export default router