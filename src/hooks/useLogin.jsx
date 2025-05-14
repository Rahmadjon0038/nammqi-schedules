'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"

const { instance } = require("@/components/api/api")
const LoginFunc = async ({ loginData }) => {
  const response = await instance.post('/api/auth/login', loginData)
  return response.data
}


export const useLogin = () => {
  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: LoginFunc,
    onSuccess: (data, { onSuccess }) => {
      Cookies.set('token', data?.access_token)
      Cookies.set('refresh_token', data?.refresh_token)
      queryClient.invalidateQueries(['userme'])
      onSuccess(data)

    },
    onError: (error) => {
      console.log(error, 'kirib bolmadi')
    }
  })
  return loginMutation
}