'use client';
import { useUserMe } from '@/hooks/users/useUserme';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('guest');
  const [userMeData, setUserMedata] = useState({})

  const { data, isLoading, err, refetch} = useUserMe()
  console.log('context',data)
  useEffect(() => {
    if (data?.role) {
      setUserMedata({ data })
      setRole(data?.role)
    }
    else {
      setRole('guest')
    }
  }, [isLoading, data])

  return (
    <AuthContext.Provider value={{ role, setRole, userMeData, setUserMedata, refetch}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
