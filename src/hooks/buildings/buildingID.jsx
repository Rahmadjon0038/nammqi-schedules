// src/hooks/useBuilding.jsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { instance } from '@/components/api/api';

const fetchBuilding = async (id) => {
  const response = await instance.get(`/api/db/buildings/${id}`);
  return response.data;
};

export const useBuilding = (id) => {
  return useQuery({
    queryKey: ['building', id],
    queryFn: () => fetchBuilding(id),
    enabled: !!id, 
    onSuccess: () => {
      console.log('Ma’lumotlar muvaffaqiyatli keldi');
    },
    onError: () => {
      console.log('Xatolik yuz berdi');
    },
  });
};
