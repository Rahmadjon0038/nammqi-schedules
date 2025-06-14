const { instance } = require("@/components/api/api")
const { useMutation, useQueryClient } = require("@tanstack/react-query")

const logoutuser = async () => {
    const response = await instance.post('/api/auth/logout')
    return response.data
}
export const useLogoutUser = () => {
    const queryclient = useQueryClient()
    const mutaionLogout = useMutation({
        mutationFn: logoutuser,
        onSuccess: (data) => {
            console.log(data)
            queryclient.invalidateQueries(['userme'])
        },
        onError: (error) => {
            console.log(error)
        }
    })
    return mutaionLogout
}

