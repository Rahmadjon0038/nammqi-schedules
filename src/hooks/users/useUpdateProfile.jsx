import { instance } from "@/components/api/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import getNotify from "../notify"
import { useAuth } from "@/context/authContext"
const { notify } = getNotify()

const updateData = async (profileData) => {
    console.log(profileData)
    const response = await instance.patch('/api/user/profile', profileData)
    return response.data
}

export const useUpdateUser = () => {
    const queryclient = useQueryClient()
    const updateMutation = useMutation({
        mutationFn: updateData,
        onSuccess: (data) => {
            queryclient.invalidateQueries(['userme'])
            console.log(data)
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
            notify('ok', 'logut')
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
            else {
                notify('err', 'Parol mos kelmadi')
            }
        },
        onError: (error) => [
            console.log(error)
        ]
    })
    return comparemutation
}

// -------------------------- change password ---------------------------

const userschangePassword = async (changepassData) => {
    const response = await instance.patch('/api/user/password/change', changepassData)
    return response.data
}

export const usePasswordchange = () => {
    const passowordChangeMutation = useMutation({
        mutationFn: userschangePassword,
        onSuccess: (data) => {
            notify('ok', 'parol mofaqqiyatli almashtirildi')
        },
        onError: (error) => {
            notify('err', error?.response?.data?.error)
        }
    })

    return passowordChangeMutation
}


//  -------------------------- delete account --------------------------

const deleteAccount = async () => {
    const response = await instance.delete('/api/user/me')
    return response.data
}

// export const useDeleteaccount = () => {
//     const queryclient = useQueryClient()

//     const deleteaccountmutation = useMutation({
//         mutationFn: deleteAccount,
//         onSuccess: (data, vars) => {
//             queryclient.invalidateQueries(['userme'])
//             Cookies.remove('token');
//             Cookies.remove('refresh_token');
//             if (vars.onSuccess) {
//                 vars.onSuccess(data)
//             }
//         },
//         onError: (err) => {
//             console.log(err)
//         }
//     })
//     return deleteaccountmutation
// }


export const useDeleteaccount = () => {
    const queryClient = useQueryClient();
    const { setUserMedata, setRole } = useAuth();
    const deleteaccountmutation = useMutation({
        mutationFn: deleteAccount,
        onSuccess: (data, vars) => {
            Cookies.remove('token');
            Cookies.remove('refresh_token');
            queryClient.invalidateQueries(['userme']);
            queryClient.removeQueries(['userme']);
            setUserMedata({});
            setRole('guest');
            if (vars.onSuccess) {
                vars.onSuccess(data);
            }
        },
        onError: (err) => {
            console.log(err);
        }
    });

    return deleteaccountmutation;
};
// -------------------------- Users table get ---------------------------
const usersget = async ({ queryKey }) => {
    const [_key, fiil] = queryKey;

    const response = await instance.get(`/api/admin/users?${fiil.daraja}=${fiil?.search}`);
    return response.data;
};

export const useGetusersData = (key) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['userstable', key], // key bu yerda masalan "rahmadjon"
        queryFn: usersget,
    });

    return { data, error, isLoading };
};



const getAuditorium = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await instance.get(`/api/db/auditoriums/buildingID/${id}`)
    return response.data
}

export const useGetAuditorium = (id) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['auditorium', id],
        queryFn: getAuditorium,
        enabled: !!id
    })
    return { data, isLoading, error }
}