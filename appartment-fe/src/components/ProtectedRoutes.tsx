import React from "react";
import { Navigate } from 'react-router-dom';

interface IprotectedRoute {
    children: any
}

const ProtectedRoute: React.FC<IprotectedRoute> = ({ children }) => {
    const auth = localStorage.getItem("auth");

    return auth ? children : <Navigate to='/' />
}

export default ProtectedRoute;