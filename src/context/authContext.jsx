import { createContext, useContext, useState } from "react"
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState('admin'); //default
    return (
        <AuthContext.Provider value={{ role, setRole }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}