import { instance } from "@/components/api/api";
import getNotify from "./notify";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useDeleteBuilding = () => {
    const { notify } = getNotify();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ building }) => {

            console.log('-------------------------',building)
            const res = await instance.delete(`/api/db/buildings/${building}`);
            queryClient.invalidateQueries(["building", building]);
            return res.data;
        },
        onSuccess: (data, { getData }) => {
            notify('ok', data.message);
            getData(data)

        },
        onError: (error, { onError }) => {
            onError(error)
        }
    });
};