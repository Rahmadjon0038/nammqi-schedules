import { instance } from "@/components/api/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"

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
            console.log('mofaqiyatli yangilandi')
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
    const qyericlient =  useQueryClient() 
    const mutaionLogout2 = useMutation({
        mutationFn: logoutuser,
        onSuccess: (data, vars) => {
            console.log(data)
            Cookies.remove('token')
            Cookies.remove('refresh_token')
            if (vars?.onSuccess) {
                vars.onSuccess(data)
            }
            qyericlient.invalidateQueries(['userme'])
        },
        onError: (error,vars) => {
            console.log(error)
            Cookies.remove('token')
            Cookies.remove('refresh_token')
            if (vars?.onSuccess) {
                vars.onSuccess()
            }
        }
    })
    return mutaionLogout2
}