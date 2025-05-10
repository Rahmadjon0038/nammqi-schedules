import { instance } from "@/components/api/api";
import getNotify from "./notify";
import { useMutation } from "@tanstack/react-query";

export const useUpdate = () => {
    const { notify } = getNotify();
    return useMutation({
        mutationFn: async ({ update, id }) => {
            const res = await instance.post(`/api/db/buildings/${id}`, update);
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