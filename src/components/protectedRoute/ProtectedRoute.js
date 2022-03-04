import React from 'react'
import { Route,Navigate } from 'react-router-dom'
import auth from '../auth/auth.js'
const ProtectedRoute = ({
    user,
    redirectPath = '/signin',
    children,
}) => {
    if (!auth.isAuthenticated()) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};
export default ProtectedRoute