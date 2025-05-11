'use client'
import React, { useState } from 'react'
import { Container, Form, Wrapper } from './style';
import getNotify from '@/hooks/notify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLogin } from '@/hooks/useLogin';
import Cookies from 'js-cookie';
import { useUser } from '@/hooks/users/useUserme';
import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

function Login() {
    const [view, setViews] = useState(true)
    const { notify } = getNotify()
    const mutation = useLogin()
    const queryClient = useQueryClient();
    const { data: user, isLoading, error } = useUser(); // user ma'lumotlari
    const { role, setRole, userMedata, setUserMedata } = useAuth();
    setRole(user?.role)
    setUserMedata( user, isLoading, error )

    const router = useRouter()

    const [loginData, setLoginData] = useState({})

    const handleChange = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if (loginData.password.length < 6) {
            notify('err', 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak')
        } else {
            mutation.mutate({
                loginData,
                getData: (data) => {
                    Cookies.set('token', data.access_token)
                    Cookies.set('refresh_token', data.refresh_token)
                    notify('success', 'Tizimga muvaffaqiyatli kirdingiz')
                    router.push('/settings')
                    queryClient.invalidateQueries({ queryKey: ['user-me'] })
                },
                onError: (error) => {
                    notify('err', error.response?.data?.message || 'Login xatosi')
                }
            });
        }
    }

    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSumbit}>
                    <h1>Tizimga kirish</h1>
                    <label>
                        <input onChange={handleChange} name='username' type="text" required placeholder='foydalanuvchi nomi' />
                    </label>
                    <label>
                        <input onChange={handleChange} name='password' type={view ? "password" : "text"} required placeholder='parol' />
                        <span onClick={() => setViews(!view)}>{view ? <FaEyeSlash className='viewIcon' /> : <FaEye className='viewIcon' />}</span>
                    </label>
                    <button type='submit'>Kirish</button>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default Login;
