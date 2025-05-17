import { instance } from "@/components/api/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import getNotify from "../notify"
const { notify } = getNotify()
const updateData = async (profileData) => {
    console.log(profileData, 'userdata')
    const response = await instance.patch('/api/user/profile', profileData)
    return response.data
}

export const useUpdateUser = () => {
    const queryclient = useQueryClient()
    const updateMutation = useMutation({
        mutationFn: updateData,
        onSuccess: (data) => {
            queryclient.invalidateQueries(['userme'])
            notify('ok', data.message)

        },
        onError: (error) => {
            console.log(error);
        }
    })
    return updateMutation
}


// ----------------- Logout -------

const logoutuser = async () => {
    const response = await instance.post('/api/auth/logout')
    return response.data
}

export const useLogoutUser2 = () => {
    const queryClient = useQueryClient();

    const mutationLogout2 = useMutation({
        mutationFn: logoutuser,
        onSuccess: (data, vars) => {
            Cookies.remove('token');
            Cookies.remove('refresh_token');

            // User me query keshdan o'chiriladi
            queryClient.removeQueries(['userme']);

            if (vars?.onSuccess) {
                vars.onSuccess(data);
            }
        },
        onError: (error, vars) => {
            console.log(error);
            Cookies.remove('token');
            Cookies.remove('refresh_token');

            // Shuningdek errorda ham keshni tozalash
            queryClient.removeQueries(['userme']);

            if (vars?.onSuccess) {
                vars.onSuccess();
            }
        },
    });

    return mutationLogout2;
};

// --------------------- compare password -----------------------

const comparepassword = async (password) => {
    const response = await instance.post('/api/user/compare-password', { password })
    return response.data
}

export const useComparePass = () => {
    const comparemutation = useMutation({
        mutationFn: comparepassword,
        onSuccess: (data) => {
            if (data.response) {
                notify('ok', 'Parol tasdiqlandi')
            }
            else{
                notify('err', 'Parol mos kelmadi')
            }
        },
        onError: (error) => [
            console.log(error)
        ]
    })
    return comparemutation
}