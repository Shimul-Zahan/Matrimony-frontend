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
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/RegularPages/About';
import EditBio from '../Pages/DashboardPages/User/EditBio';
import ViewBio from '../Pages/DashboardPages/User/ViewBio';
import ContactRequest from '../Pages/DashboardPages/User/ContactRequest';
import FavouriteBiodata from '../Pages/DashboardPages/User/FavouriteBiodata';
import AdminPage from '../Pages/DashboardPages/Admin/AdminPage'
import ApprovePremium from '../Pages/DashboardPages/Admin/ApprovePremium'
import ContactRequestA from '../Pages/DashboardPages/Admin/ContactRequestA'
import ManageUsers from '../Pages/DashboardPages/Admin/ManageUsers'
import ViewDetails from '../Pages/RegularPages/ViewDetails';
import Payment from '../Pages/Components/Payment';

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
                path: 'viewDetails/:id',
                element: <ViewDetails />,
            },
            {
                path: 'cheekout/:id',
                element: <Payment />,
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <Contact />
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
                element: <EditBio />
            },
            {
                path: 'view-biodata',
                element: <ViewBio />
            },
            {
                path: 'my-contact-request',
                element: <ContactRequest />
            },
            {
                path: 'favourites-biodata',
                element: <FavouriteBiodata />
            },
            // admin route
            {
                path: 'admin-dashboard',
                element: <AdminPage />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            {
                path: 'approved-premium',
                element: <ApprovePremium />
            },
            {
                path: 'approve-contact-request',
                element: <ContactRequestA />
            },
        ]
    }
])

export default router