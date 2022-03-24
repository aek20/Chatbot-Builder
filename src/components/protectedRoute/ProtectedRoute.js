import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import auth2 from '../auth/auth.js'
import { auth, check, userState } from "../../firebase/firebase.js"

import { useAuthState } from "react-firebase-hooks/auth";
const ProtectedRoute = ({ user, children }) => {
    if (!user) {
    
        return <Navigate to="/signin" replace />;
    }
   
    return children;
};


export default ProtectedRoute
