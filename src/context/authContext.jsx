import { createContext, useContext, useState } from "react"
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState('admin'); //default
    const [userMedata, setUserMedata] = useState({})
    return (
        <AuthContext.Provider value={{ role, setRole,userMedata, setUserMedata }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}