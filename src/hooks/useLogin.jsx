'use client'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import getNotify from "./notify"
const { notify } = getNotify()
const { instance } = require("@/components/api/api")


const LoginFunc = async (loginData) => {
  const response = await instance.post('/api/auth/login', loginData)
  return response.data
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: LoginFunc,
    onSuccess: (data, variables) => {
      Cookies.set('token', data?.access_token)
      Cookies.set('refresh_token', data?.refresh_token)
      queryClient.invalidateQueries(['userme'])
      if (variables?.onSuccess) {
        variables.onSuccess(data)
        notify('ok','kirish mofaqqiyatli')
      }
    },
    onError: (error) => {
      notify('err',error.response.data.error)
    }
  })
  return loginMutation
}

