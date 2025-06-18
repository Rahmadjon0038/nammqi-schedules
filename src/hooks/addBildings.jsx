import { instance } from "@/components/api/api";
import getNotify from "./notify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAddBuilding = () => {
    const { notify } = getNotify();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ addBuilding }) => {
            const res = await instance.post('/api/db/buildings/add', addBuilding);
            queryClient.invalidateQueries(["buildings"]);
            return res.data;
        },
        onSuccess: (data, { getData }) => {
            notify('ok', "Bino muvaffaqiyatli qo'shildi");
            getData(data)
        },
        onError: (error, { onError }) => {
            notify('err', error?.response?.data?.message || 'xatolik');
            onError(error)
        }
    });
};




// --------------------------SCHEDULES ---------------------
const getSchedules = async ({ queryKey }) => {
  const [_key, { buildingID, shift, weekType, startDate, endDate }] = queryKey
  const response = await instance.get(`/api/db/schedules`, {
    params: {
      buildingID,
      shift,
      weekType,
      startDate,
      endDate,
    }
  })
  return response.data
}

export const useGetschedules = (filters) => {
  return useQuery({
    queryKey: ['schedules', filters],
    queryFn: getSchedules,
    enabled: !!filters.buildingID, // faqat buildingID bor bo‘lsa fetch qil
  })
}


export const useAddLessons = () => {
  const queryClient = useQueryClient();
  const { notify } = getNotify();

  return useMutation({
    mutationFn: async ({ lesson }) => {
      const res = await instance.post('/api/db/schedules', lesson);
      return res.data;
    },
    onSuccess: (data, { getData }) => {
      notify('ok', "Dars muvaffaqiyatli qo‘shildi");
      queryClient.invalidateQueries(['lessons']); // kerakli query nomi
      if (getData) getData(data);
    },
    onError: (err, { onError }) => {
      console.log(err,'test')
      notify('err', err?.response?.data?.error || "Xatolik yuz berdi");
      if (onError) onError(err);
    }
  });
};