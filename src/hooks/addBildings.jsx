import { instance } from "@/components/api/api";
import getNotify from "./notify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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