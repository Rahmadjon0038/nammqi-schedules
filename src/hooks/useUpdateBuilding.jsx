import { instance } from "@/components/api/api";
import getNotify from "./notify";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useUpdate = () => {
    const { notify } = getNotify();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ update, building }) => {
            console.log(building,'mutation')
            console.log(update)
            const res = await instance.patch(`/api/db/buildings/${building}`, update);
            queryClient.invalidateQueries(["building", building]);
            return res.data;
        },
        onSuccess: (data, { getData }) => {
            notify('ok', "Bino muvaffaqiyatli yangilandi");
            getData(data)
            
        },
        onError: (error, { onError }) => {
            notify('err', error?.response?.data?.message || 'xatolik');
            onError(error)
        }
    });
};