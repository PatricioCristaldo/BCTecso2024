import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoggedInProtect = ( { element } ) =>{
    const isAuthenticated = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/home" replace />
    }
    return element;
};

export default LoggedInProtect;