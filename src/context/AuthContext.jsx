import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ( { children } )=>{
    const [ authToken, setAuthToken ] = useState(null);

    const saveLogin = ( token ) => {
        setAuthToken( token );
        console.log("Guardaremos el token!")
        localStorage.setItem('authToken', token);
    }

    const logout = ()=>{
        setAuthToken(null);
        localStorage.removeItem('authToken');
    }

    return (
        <AuthContext.Provider value={ {authToken, saveLogin, logout} }>
            { children }
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };