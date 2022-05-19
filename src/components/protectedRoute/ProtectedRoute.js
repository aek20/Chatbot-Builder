import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Navigate} from "react"

import {getAuth} from "firebase/auth";
const ProtectedRoute = ({  children }) => {
    const auth = getAuth();
    const user = auth.currentUser
    
    if (user==null ) {

        return <Navigate to="/signin" replace />; 
        
    }
    return children;
};


export default ProtectedRoute
