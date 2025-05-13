import { instance } from "@/components/api/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const updateData = async (profileData) => {
    console.log(profileData,'userdata')
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