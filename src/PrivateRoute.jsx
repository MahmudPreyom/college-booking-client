/* eslint-disable react/prop-types */
import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from "./providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user success', user);
    if (loading) {
        return <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;