'use client'
import React from 'react'
import { useAuth } from '@/context/authContext'
import {
  Wrapper,
  Card,
  Title,
  InfoRow,
  Label,
  Value
} from './style'

function Settings() {
  const { role, setRole, userMedata } = useAuth();

  return (
    <Wrapper>
      <Title>Foydalanuvchi Sozlamalari</Title>
      <Card>
        <InfoRow>
          <Label>Ism:</Label>
          <Value>{userMedata?.firstname}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Familiya:</Label>
          <Value>{userMedata?.lastname}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Username:</Label>
          <Value>{userMedata?.username}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Rol:</Label>
          <Value>{userMedata?.role}</Value>
        </InfoRow>
      </Card>
    </Wrapper>
  )
}

export default Settings;
