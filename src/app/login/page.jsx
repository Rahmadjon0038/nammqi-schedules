'use client'
import React, { useState } from 'react'
import { Container, Form, Wrapper } from './style';
import LoginImg from '../../assets/loginBg.jpeg'
import Image from 'next/image';
function Login() {
    const [loginData, setLoginData] = useState({

    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(loginData)
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
                    <button>Kirish</button>
                </Form>
               
            </Container>
        </Wrapper>
    )
}

export default Login
