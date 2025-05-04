'use client'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useEffect } from 'react'
import './globals.css'

function layout({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])
  return (
    <html lang='en'>
      <body style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: '1' }}>
          {children}
        </main>
      </body>
    </html>
  )
}

export default layout
