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
import AllBiodatas from '../Pages/RegularPages/AllBiodatas';
import SuccessStory from '../Pages/DashboardPages/User/SuccessStory';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import SuccessStoryAdmin from '../Pages/DashboardPages/Admin/SuccessStoryAdmin';

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
                element: <AllBiodatas />
            },
            {
                path: 'viewDetails/:id',
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
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
            {
                path: 'success-story',
                element: <SuccessStory />
            },
            // admin route
            {
                path: 'admin-dashboard',
                element: <AdminRoute><AdminPage /></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'approved-premium',
                element: <AdminRoute><ApprovePremium /></AdminRoute>
            },
            {
                path: 'approve-contact-request',
                element: <AdminRoute><ContactRequestA /></AdminRoute>
            },
            {
                path: 'success-story-admin',
                element: <AdminRoute><SuccessStoryAdmin /></AdminRoute>
            },
        ]
    }
])

export default router