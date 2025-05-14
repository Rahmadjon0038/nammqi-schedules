'use client'
import React, { useState } from 'react';
import { Container, Form, Wrapper } from './style';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import getNotify from '@/hooks/notify';
import { useLogin } from '@/hooks/useLogin';
import { useAuth } from '@/context/authContext';

function Login() {
  const [view, setView] = useState(true);
  const [loginData, setLoginData] = useState({});
  const { notify } = getNotify()
  const loginMutation = useLogin()
  const { refetch } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password.length < 6) {
      return notify('err', 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak');
    }
    loginMutation.mutate({
      loginData, onSuccess: (data) => {
        refetch()
        'malumot yangilandi'
      }
    })
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Tizimga kirish</h1>
          <label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              required
              placeholder="Foydalanuvchi nomi"
            />
          </label>
          <label>
            <input
              onChange={handleChange}
              name="password"
              type={view ? 'password' : 'text'}
              required
              placeholder="Parol"
            />
            <span onClick={() => setView(!view)}>
              {view ? <FaEyeSlash className="viewIcon" /> : <FaEye className="viewIcon" />}
            </span>
          </label>
          <button type="submit">
            Kirish
          </button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Login;
