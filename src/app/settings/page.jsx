'use client'
import { useAuth } from '@/context/authContext'
import React from 'react'

function Settings() {
  const { role, setRole } = useAuth();
  setRole('user')
  console.log(role,'salom')
  
  return (
    <div>
      <h1>Settings</h1>
    </div>
  )
}

export default Settings
