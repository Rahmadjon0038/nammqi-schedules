'use client';
import { useUserMe } from '@/hooks/users/useUserme';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('guest');
  const [userMeData, setUserMedata] = useState({})

  const { data, isLoading, err, refetch} = useUserMe()
  useEffect(() => {
    if (data?.role) {
      setUserMedata(data)  // to'g'ri yozuv shu
      setRole(data.role)
    } else {
      setUserMedata({})
      setRole('guest')
    }
  }, [data])
  return (
    <AuthContext.Provider value={{ role, setRole, userMeData, setUserMedata, refetch}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
