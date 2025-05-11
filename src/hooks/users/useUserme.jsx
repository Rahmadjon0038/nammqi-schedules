import { instance } from '@/components/api/api';
import { useQuery } from '@tanstack/react-query';

const getUserMe = async () => {
  const res = await instance.get('/api/user/me');
  return res.data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ['user-me'],
    queryFn: getUserMe,
    enabled: typeof window !== 'undefined' && !!document.cookie.includes('token'), // token bo‘lsa faqat so‘rov yubor
  });
};
