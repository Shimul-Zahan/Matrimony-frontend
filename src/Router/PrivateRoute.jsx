import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { Navigation } from 'swiper/modules';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(MyAuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/signin' state={location.state}></Navigate>
}

export default PrivateRoute