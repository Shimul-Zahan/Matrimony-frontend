import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import fetchAdmin from '../Hooks/fetchAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(MyAuthContext);
    const { admin, isLoading } = fetchAdmin();
    console.log(admin)
    const location = useLocation();

    if (loading || isLoading) {
        return <div>Loading...</div>
    }

    if (user && admin.isAdmin) {
        return children
    }

    return <Navigate to='/signin' state={location.state}></Navigate>
}

export default AdminRoute