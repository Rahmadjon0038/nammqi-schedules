import { useMutation } from '@tanstack/react-query';
import getNotify from './notify'; 
import { instance } from '@/components/api/api';
import { setCookie } from './cookies';

export const useLogin = () => {
  const { notify } = getNotify();
  return useMutation({
    mutationFn: async ({ loginData }) => {
      const res = await instance.post('/api/auth/login', loginData);
      return res.data;
    },
    onSuccess: (data, { getData }) => {
      notify('ok', 'Tizimga muvaffaqiyatli kirdingiz');
      getData(data)
    },
    onError: (error) => {
      notify('err', error?.response?.data?.message || 'Login xatoligi');
    }
  });
};