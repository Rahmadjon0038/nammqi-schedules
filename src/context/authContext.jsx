'use client';
import { useUserMe } from '@/hooks/users/useUserme';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('guest');
  const [userMeData, setUserMedata] = useState({})
  const { data, isLoading, err } = useUserMe()

  useEffect(() => {
    setUserMedata({ data })
    setRole(data?.role)
  }, [isLoading, data])

  return (
    <AuthContext.Provider value={{ role, setRole, userMeData, setUserMedata }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
