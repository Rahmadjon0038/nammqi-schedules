'use client'
import React, { useState } from 'react'
import { Container, Form, Wrapper } from './style';
import getNotify from '@/hooks/notify';
function Login() {
    const { notify } = getNotify()
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
            console.log(loginData)
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
                        <input onChange={handleChange} name='password' type="password" required placeholder='parol' />
                    </label>
                    <label>
                        <input onChange={handleChange} name='password' type="password" required placeholder='parol' />
                    </label>
                    <button>Ro'yhatdan o'tish</button>
                </Form>
            </Container>
        </Wrapper>
    )
}
export default Login
