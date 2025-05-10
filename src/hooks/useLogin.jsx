import { useMutation } from "@tanstack/react-query"

const { instance } = require("@/components/api/api")

const loginUser = async (data) => {
    const res = await instance.post('/api/auth/login', data)
    return res.data
}

export const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      notify('success', 'Muvaffaqiyatli tizimga kirdingiz')
    },
    onError: (err) => {
      notify('err', err.response?.data?.message || 'Xatolik yuz berdi')
    },
  })