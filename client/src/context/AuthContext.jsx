import { createContext, useEffect, useState } from "react";
import { getUserInfo } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        localStorage.setItem('token', token);
    },[token]);

    useEffect( () => {
        const fetchUserData = async () => {
            try {
                const data = await getUserInfo(token);
                setUser(data);
            } catch (error) {
                setToken('');
                setUser(null);
            }
        }
        if(token) fetchUserData();

    },[token, setToken]);

    return (
        <AuthContext.Provider value={ { token, setToken, user } }>
            {children}
        </AuthContext.Provider>
    )
}