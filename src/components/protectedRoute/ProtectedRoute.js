import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Navigate} from "react"

const ProtectedRoute = ({ user, children }) => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken!=="true" ) {
        return <Navigate to="/signin" replace />; 
        
    }
    return children;
};


export default ProtectedRoute
