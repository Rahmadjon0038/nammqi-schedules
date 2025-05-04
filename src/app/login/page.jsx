'use client'
import React, { useState } from 'react'
import { Container, Form, Wrapper } from './style';
function Login() {
    const [loginData, setLoginData] = useState({

    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        if (loginData.password.length < 6){
            alert('parol kamida 6 ta belgidan iborat bolishi kerak')
        }
        else{
           console.log(loginData) 
        }

    }
    return (
        <Wrapper className='bgImg'>
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
