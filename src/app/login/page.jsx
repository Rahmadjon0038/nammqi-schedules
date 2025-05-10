'use client'
import React, { useState } from 'react'
import { Container, Form, Wrapper } from './style';
import getNotify from '@/hooks/notify';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useLogin } from '@/hooks/useLogin';
import { setCookie } from '@/hooks/cookies';
function Login() {
    const [view, setViews] = useState(true)
    const { notify } = getNotify()
    const mutation = useLogin()
    const [loginData, setLoginData] = useState({
    })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        if (loginData.password.length < 6) {
            notify('err', 'parol kamida 6 ta belgidan iborat bolishi kerak')
        }
        else {
            mutation.mutate({
                loginData, getData: (data) => {
                    console.log(data)
                    setCookie('token', data.access_token)
                },
                onError: (error) => {
                    console.log(error)
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
                    <button>Kirish</button>
                </Form>
            </Container>
        </Wrapper>
    )
}
export default Login
