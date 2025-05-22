// src/hooks/useBuildings.jsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { instance } from '@/components/api/api'; // to‘g‘ri yo‘l bo‘lsin

const fetchBuildings = async () => {
  const response = await instance.get('/api/db/buildings/all');
  return response.data;
};

export const useBuildings = () => {
  return useQuery({
    queryKey: ['buildings'],
    queryFn: fetchBuildings,
    onSuccess: (data) => {
      console.log('Muvaffaqiyatli yuklandi');
    },
    onError: () => {
      console.log('Xatolik yuz berdi');
    },
  });
};
