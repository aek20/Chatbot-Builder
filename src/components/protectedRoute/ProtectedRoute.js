import React from 'react'
import { Route,Navigate } from 'react-router-dom'
import auth2 from '../auth/auth.js'
import {auth,check} from "../../firebase/firebase.js"


const ProtectedRoute = ({

    redirectPath = '/signin',
    children,
}) => {

    if (!check()) {
return <Navigate to={redirectPath} replace />;   
    }
else{
    return children;}
};
export default ProtectedRoute
