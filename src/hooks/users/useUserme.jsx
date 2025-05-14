import { instance } from '@/components/api/api';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

const getUserMe = async () => {
  const res = await instance.get('/api/user/me');
  return res.data;
};

export const useUserMe = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['userme'],
    queryFn: getUserMe,
  })
  return { data, isLoading, error, refetch }
}