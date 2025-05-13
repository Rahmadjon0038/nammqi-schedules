'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"

const { instance } = require("@/components/api/api")
const LoginFunc = async (loginData) => {
  console.log(loginData, 'logindata')
  const response = await instance.post('/api/auth/login', loginData)
  return response.data
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: LoginFunc,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['user-me'])
      Cookies.set('token',data?.access_token)
      Cookies.set('refresh_token',data?.refresh_token)

    },
    onError: (error) => {
      console.log(error,'kirib bolmadi')
    }
  })
  return loginMutation
}