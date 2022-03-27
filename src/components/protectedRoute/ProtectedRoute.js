import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/dashboard')
        }

        if (!authToken) {
            navigate('/signin')
        }

    
    }, [])
    return (
        <div>
            Home Page
        </div>
    )
}


